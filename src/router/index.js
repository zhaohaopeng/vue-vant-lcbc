import {
  createRouter,
  createWebHashHistory,
  // createWebHistory
} from 'vue-router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
})

const routes = [{
    path: '/',
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
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login'),
  },
]

const router = createRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  const {
    title
  } = to.meta;
  if (title) {
    document.title = title;
  }
  next();
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;