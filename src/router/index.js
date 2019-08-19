import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import {
  Toast,
  MessageBox
} from 'mint-ui'

Vue.use(Router)
Vue.use(Meta)
const router = new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: () => import('@/pages/index/index'),
    },
    {
      path: '/login',
      component: () => import('@/pages/login/index'),
      children: [{
          path: '',
          component: () => import('@/pages/login/login'),
        },
        //忘记密码
        {
          path: 'unpassword',
          component: () => import('@/pages/login/unpassword'),
        },
        //忘记密码，重置密码
        {
          path: 'modify',
          component: () => import('@/pages/login/modify'),
        },
        //修改密码
        {
          path: 'changepwd',
          component: () => import('@/pages/login/changepwd'),
        },
        //修改密码成功
        {
          path: 'succ',
          component: () => import('@/pages/login/succ'),
        },
        //注册
        {
          path: 'userreg',
          component: () => import('@/pages/login/userreg'),
        },
        //注册成功
        {
          path: 'userregSucc',
          component: () => import('@/pages/login/userregSucc'),
        },
        //实名
        {
          path: 'smrz',
          component: () => import('@/pages/login/smrz'),
        },
        //银行卡
        {
          path: 'bank',
          component: () => import('@/pages/login/bank'),
        },
        //显示银行卡
        {
          path: 'showBank',
          component: () => import('@/pages/login/showBank'),
        },
      ]
    },
    //个人中心
    {
      path: '/account',
      component: () => import('@/pages/account/index'),
      children: [{
          path: '',
          component: () => import('@/pages/account/account'),
        },
        //优惠券
        {
          path: 'coupon',
          component: () => import('@/pages/account/coupon'),
        },
        //充值
        {
          path: 'usercz',
          component: () => import('@/pages/account/usercz'),
        },
        //提现
        {
          path: 'usertx',
          component: () => import('@/pages/account/usertx'),
        },
        //提现记录
        {
          path: 'txjl',
          component: () => import('@/pages/account/txjl'),
        },
        //待支付订单
        {
          path: 'waitpay',
          component: () => import('@/pages/account/waitpay'),
        },
        //购彩记录
        {
          path: 'paylottery',
          component: () => import('@/pages/account/paylottery'),
        },
        //购彩记录详情
        {
          path: 'paylotteryDetail/:gid/:hid',
          component: () => import('@/pages/account/paylotteryDetail'),
        },
        //追号记录
        {
          path: 'zhlist',
          component: () => import('@/pages/account/zhlist'),
        },
        //追号记录 详情
        {
          path: 'zhlistDetail/:tid/:lotid',
          component: () => import('@/pages/account/zhlistDetail'),
        },
        //积分
        {
          path: 'integral',
          component: () => import('@/pages/account/integral'),
        },
        //积分明细
        {
          path: 'integralDetail',
          component: () => import('@/pages/account/integralDetail'),
        },
        //帐户明细
        {
          path: 'accountDetail',
          component: () => import('@/pages/account/accountDetail'),
        },
        //解说记录
        {
          path: 'explainList',
          component: () => import('@/pages/account/explainList'),
        },
        //设置
        {
          path: 'set',
          component: () => import('@/pages/account/set'),
        },

      ]
    },
    {
      path: '/gong',
      name: 'gong',
      component: () => import('@/pages/gong/index'),
    },
    {
      path: '/gong/news/:tab',
      name: 'gongNews',
      component: () => import('@/pages/gong/news'),
    },
    {
      path: '/dailycontest',
      name: 'dailycontest',
      component: () => import('@/pages/gong/dailycontest'),
    },
    {
      path: '/liveZQ',
      name: 'liveZQ',
      component: () => import('@/pages/live/liveZQ'),
    },
    {
      path: '/liveLQ',
      name: 'liveLQ',
      component: () => import('@/pages/live/liveLQ'),
    },
    {
      path: '/kjxx',
      component: () => import('@/pages/kjxx/app'),
      children: [{
          path: '',
          component: () => import('@/pages/kjxx/index'),
        },
        //数字彩详情
        {
          path: 'detailSzc/:gid/:pid/:name',
          component: () => import('@/pages/kjxx/detailSzc'),
        },
        //竞技彩详情
        {
          path: 'detailJjc/:gid/:pid/:name',
          component: () => import('@/pages/kjxx/detailJjc'),
        },
        //快频彩详情
        {
          path: 'detailKpc/:gid/:pid/:name/:time/:code',
          component: () => import('@/pages/kjxx/detailKpc'),
        },
        //开奖史历详情
        {
          path: 'history/:gid/:name',
          component: () => import('@/pages/kjxx/history'),
        },
      ]
    },
    {
      path: '/help',
      component: () => import('@/pages/help/app'),
      children: [{
          path: '',
          component: () => import('@/pages/help/app'),
        },
        {
          path: 'gid01',
          component: () => import('@/pages/help/gid01')
        },
        {
          path: 'gid50',
          component: () => import('@/pages/help/gid50')
        },
        {
          path: 'gid03',
          component: () => import('@/pages/help/gid03')
        },
        {
          path: 'gid53',
          component: () => import('@/pages/help/gid53')
        },
        {
          path: 'gid52',
          component: () => import('@/pages/help/gid52')
        },
        {
          path: 'gid07',
          component: () => import('@/pages/help/gid07')
        },
        {
          path: 'gid51',
          component: () => import('@/pages/help/gid51')
        },
        {
          path: 'gid80',
          component: () => import('@/pages/help/gid80')
        },
        {
          path: 'gid81',
          component: () => import('@/pages/help/gid81')
        },
        {
          path: 'gid82',
          component: () => import('@/pages/help/gid82')
        },
        {
          path: 'gid83',
          component: () => import('@/pages/help/gid82')
        },
        {
          path: 'gid06',
          component: () => import('@/pages/help/gid06')
        },
        {
          path: 'gid55',
          component: () => import('@/pages/help/gid55')
        },

      ]
    },
    {
      path: '/reghelp',
      name: 'reghelp',
      component: () => import('@/pages/help/reghelp'),
    },
    {
      path: '/couponRule',
      name: 'couponRule',
      component: () => import('@/pages/help/couponRule')
    },
    {
      path: '/gd',
      name: 'gd',
      component: () => import('@/pages/gd/index'),
      children: [{
          path: '',
          component: () => import('@/pages/gd/gdfd')
        },
        {
          path: 'search',
          component: () => import('@/pages/gd/search')
        },
        {
          path: 'sensation',
          component: () => import('@/pages/gd/sensation')
        },
        {
          path: 'redbill',
          component: () => import('@/pages/gd/redbill')
        },
        {
          path: 'profit',
          component: () => import('@/pages/gd/profit')
        },
        {
          path: 'wdzj',
          component: () => import('@/pages/gd/wdzj')
        },
      ]
    }
  ],
  //进入页面就到定点到顶点
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
router.beforeEach((to, from, next) => {
  if (to.meta.login) { //判断前往的界面是否需要登陆
    MessageBox({
      title: '提示',
      message: '请先登录!',
      showCancelButton: true
    });
    MessageBox.confirm('确定').then(action => {
      router.push('/login')
    })
  } else {
    next()
  }
  //  if (to.meta.login) { //判断前往的界面是否需要登陆
  //      if (store.state.user.user.name) { // 是否已经登陆
  //          next()
  //      }else{
  //      	MessageBox({
  //   title: '提示',
  //   message: '请先登录!',
  //   showCancelButton: true
  // });
  //      	MessageBox.confirm('确定').then(action => {
  //      		Vue.$router.push('/login')
  //      	})

  //      }
  //  }else{
  //      next() 
  //  }

})
export default router
