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
    name: 'Home',
    component: () => import('@/view/home'),
    meta: {
      title: '工行'
    }
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