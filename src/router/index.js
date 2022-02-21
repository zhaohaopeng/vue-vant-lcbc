import {
  createRouter,
  createWebHashHistory,
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

import store from '@/store'
import {
  Notify,
} from 'vant'
import {
  queryBankUserInfo
} from '@/api'
import {
  // isChinese,
  getQueryParam
} from '@/utils/index'

router.beforeEach(async (to, from, next) => {

  NProgress.start();

  const {
    title
  } = to.meta;

  if (title) {
    document.title = title;
  }

  if (store.state.account) {
    next();
  } else {
    const {
      areaName,
      xml,
      key
    } = getQueryParam(window.location.href);
    if (areaName && xml && key) {
      try {
        // const res = await queryBankUserInfo({
        //   areaName: "%E6%B7%B1%E5%9C%B3",
        //   key: "rfEcuNQwdCbQg/vkkEzZiUC0K5eFrtAyUjC85hnDqjlAkv1GYKgRIBRq+MFfYcZbfj9HRhfmKYhtJp83gzmvZqmKUeNnMrccLsvvEWvLOEtlspXiE2Zg4shQ81zbKFPybQgcLSER/C2RruELct/fXpDcV5Rb55xySuSpGHBmjyA=",
        //   xml: "A4A6B6B37DB0558B3E1CCAF5ADDE905027BF33DFE6C5381AE618288A7647C35B35E8F407C52923CDB375A879D6E67CA4543F6F07DCC7D8CF93E1329E8D6944A0AB43B917C5209159254E4FB58940BF7895F940576018EAE7FC58B64DCC3546CA61CDCB792A3F3AB54F434B96496F55023A8C6BC5066779B2AA52E9504DE4F3BE4A78B0E0B448F72F77D7398159BFC24F4DF2F5047E047E07FE222E95EBC46659A163DE250A296445EBD6C395AEDC2B10",
        // })
        const res = await queryBankUserInfo({
          areaName,
          key,
          xml
        })
        if (res.StatusMsg == 'success') {
          store.commit('setopenid', res.openID);
          store.commit('setAccount', res.phoneNumber);
          store.commit('setUserinfo', res);
          next();
        } else {
          next();
        }
      } catch {
        Notify({
          type: "warning",
          message: "未获取到用户信息"
        });
      }
    } else {
      next();
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router;