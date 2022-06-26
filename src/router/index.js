import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import store from "../store";
import {
  getQueryVariable
} from "@/utils/index";
import {
  queryUserInfoicbc
} from "@/api";

import {
  Notify
  // Dialog
} from "vant";

NProgress.configure({
  showSpinner: false
})

const routes = [{
    path: '/',
    redirect: '/ccq'
  },
  {
    path: '/ccq',
    name: 'Ccq',
    component: () => import('@/view/ccq'),
    meta: {
      title: '乘车券'
    }
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('@/view/guide'),
    meta: {
      title: '乘车券'
    }
  },
  {
    path: '/ride',
    name: 'Ride',
    component: () => import('@/view/ride'),
    meta: {
      title: '乘车券'
    }
  },
]

const router = createRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  history: createWebHistory('/ccq/'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const {
    title
  } = to.meta;
  if (title) {
    document.title = title;
  }
  const userInfoKey = store.state.userInfoKey;
  if (userInfoKey) {
    next();
  } else {
    const key = getQueryVariable("userInfoKey");
    if (!key) {
      const urlStr =
        "https://m.mall.icbc.com.cn/mobile/member/checkAuthorizationNew.jhtml?targetUrl=http%3A%2F%2Fsy.szduopin.com%2Fccq&outerName=19026799";
      window.location.href = urlStr;
    } else {
      try {
        const {
          StatusMsg,
          mobile,
          deviceId,
          userId
        } = await queryUserInfoicbc({
          userInfoKey: key
        });

        if (StatusMsg == "success") {
          store.commit("setUserInfoKey", key);
          store.commit("setMobile", mobile);
          store.commit("setDeviceId", deviceId);
          store.commit("setUserId", userId);
          next();
        } else {
          Notify({
            type: "warning",
            message: "获取用户信息错误"
          });
        }
      } catch (err) {
        Notify({
          type: "warning",
          message: `系统错误`
        });
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router;