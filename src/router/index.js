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

const routes = [
  {
    path: '/',
    redirect: '/txsp'
  },
  {
    path: '/txsp',
    name: 'Txsp',
    component: () => import('@/view/txsp'),
    meta: {
      title: '腾讯视频'
    }
  },
  {
    path: '/txintegral',
    name: 'Txintegral',
    component: () => import('@/view/txintegral'),
    meta: {
      title: '腾讯视频'
    }
  },
  {
    path: '/txvip',
    name: 'Txvip',
    component: () => import('@/view/txvip'),
    meta: {
      title: '腾讯视频'
    }
  },
]

const router = createRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  history: createWebHistory('/txsp/'),
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
        "https://m.mall.icbc.com.cn/mobile/member/checkAuthorizationNew.jhtml?targetUrl=http%3A%2F%2Fsy.szduopin.com%2Ftxsp&outerName=19026799";
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