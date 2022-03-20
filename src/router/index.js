import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
})

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/view/login'),
  },
  {
    path: '/ccq',
    name: 'Ccq',
    component: () => import('@/view/ccq'),
    meta: {
      title: '乘车券活动'
    }
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
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('@/view/guide'),
    meta: {
      title: '用卷指引'
    }
  },
  {
    path: '/ride',
    name: 'Ride',
    component: () => import('@/view/ride'),
  },

]

const router = createRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  history: createWebHistory('/ccq/'),
  routes,
})

// import store from '@/store'
// import {
//   Notify,
// } from 'vant'
// import {
//   queryBankUserInfo
// } from '@/api'
// import {
//   // isChinese,
//   getQueryParam
// } from '@/utils/index'

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const {
    title
  } = to.meta;
  if (title) {
    document.title = title;
  }
  next();
  // if (store.state.account) {
  //   next();
  // } else {
  //   const {
  //     areaName,
  //     xml,
  //     key
  //   } = getQueryParam(window.location.href);
  //   if (areaName && xml && key) {
  //     try {
  //       const res = await queryBankUserInfo({
  //         areaName,
  //         key,
  //         xml
  //       })
  //       if (res.StatusMsg == 'success') {
  //         store.commit('setopenid', res.openID);
  //         store.commit('setAccount', res.phoneNumber);
  //         store.commit('setUserinfo', res);
  //         next();
  //       } else {
  //         next();
  //       }
  //     } catch {
  //       Notify({
  //         type: "warning",
  //         message: "未获取到用户信息"
  //       });
  //     }
  //   } else {
  //     next();
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done()
})

export default router;