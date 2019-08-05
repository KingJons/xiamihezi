import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 路由懒加载
const Login = (resolve) => {
  import('@/view/login').then((module) => {
    resolve(module)
  })
}
const Index = (resolve) => {
  import('@/view/index').then((module) => {
    resolve(module)
  })
}
const GoodsDetails = (resolve) => {
  import('@/view/GoodsDetails').then((module) => {
    resolve(module)
  })
}
const Cart = (resolve) => {
  import('@/view/cart').then((module) => {
    resolve(module)
  })
}
const EmptyCart = (resolve) => {
  import('@/view/emptyCart').then((module) => {
    resolve(module)
  })
}
const Home = (resolve) => {
  import('@/view/home').then((module) => {
    resolve(module)
  })
}
const FirmOrder = (resolve) => {
  import('@/view/FirmOrder').then((module) => {
    resolve(module)
  })
}
const PaySuccess = (resolve) => {
  import('@/view/paySuccess').then((module) => {
    resolve(module)
  })
}
const DealDone = (resolve) => {
  import('@/view/dealDone').then((module) => {
    resolve(module)
  })
}
const MyOrder = (resolve) => {
  import('@/view/myOrder').then((module) => {
    resolve(module)
  })
}
const AllEvaluate = (resolve) => {
  import('@/view/AllEvaluate').then((module) => {
    resolve(module)
  })
}
const Personal = (resolve) => {
  import('@/view/personal').then((module) => {
    resolve(module)
  })
}
const MyAllOrder = (resolve) => {
  import('@/view/myAllOrder').then((module) => {
    resolve(module)
  })
}
const ViewLogistics = (resolve) => {
  import('@/view/viewLogistics').then((module) => {
    resolve(module)
  })
}
const PublishComments = (resolve) => {
  import('@/view/publishComments').then((module) => {
    resolve(module)
  })
}
const PublishReview = (resolve) => {
  import('@/view/publishReview').then((module) => {
    resolve(module)
  })
}
const CommentsSuccess = (resolve) => {
  import('@/view/commentsSuccess').then((module) => {
    resolve(module)
  })
}
const CommentsDetails = (resolve) => {
  import('@/view/commentsDetails').then((module) => {
    resolve(module)
  })
}
const AddressManage = (resolve) => {
  import('@/view/addressManage').then((module) => {
    resolve(module)
  })
}
const EditAddress = (resolve) => {
  import('@/view/editAddress').then((module) => {
    resolve(module)
  })
}
const AddAddress = (resolve) => {
  import('@/view/addAddress').then((module) => {
    resolve(module)
  })
}
const SystemSetting = (resolve) => {
  import('@/view/systemSetting').then((module) => {
    resolve(module)
  })
}
const PhoneBinding = (resolve) => {
  import('@/view/phoneBinding').then((module) => {
    resolve(module)
  })
}
const PersonalData = (resolve) => {
  import('@/view/personalData').then((module) => {
    resolve(module)
  })
}
const Feedback = (resolve) => {
  import('@/view/feedback').then((module) => {
    resolve(module)
  })
}
const MyFans = (resolve) => {
  import('@/view/myFans').then((module) => {
    resolve(module)
  })
}
const Refund = (resolve) => {
  import('@/view/refund').then((module) => {
    resolve(module)
  })
}
const RefundService = (resolve) => {
  import('@/view/refundService').then((module) => {
    resolve(module)
  })
}
const SelectService = (resolve) => {
  import('@/view/selectService').then((module) => {
    resolve(module)
  })
}
const ApplyRefund = (resolve) => {
  import('@/view/applyRefund').then((module) => {
    resolve(module)
  })
}
const MyIntegral = (resolve) => {
  import('@/view/myIntegral').then((module) => {
    resolve(module)
  })
}
const ShopRevenue = (resolve) => {
  import('@/view/shopRevenue').then((module) => {
    resolve(module)
  })
}
const Reference = (resolve) => {
  import('@/view/reference').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/goodsDetails',
      name: 'goodsDetails',
      component: GoodsDetails,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/firmOrder',
      name: 'firmOrder',
      component: FirmOrder,
      meta: {
        title: '确认订单'
      }
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: PaySuccess,
      meta: {
        title: '付款成功'
      }
    },
    {
      path: '/dealDone',
      name: 'dealDone',
      component: DealDone,
      meta: {
        title: '交易成功'
      }
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: MyOrder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/allEvaluate',
      name: 'allEvaluate',
      component: AllEvaluate,
      meta: {
        title: '全部评价'
      }
    },
    {
      path: '/emptyCart',
      name: 'emptyCart',
      component: EmptyCart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/myAllOrder',
      name: 'myAllOrder',
      component: MyAllOrder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/viewLogistics',
      name: 'viewLogistics',
      component: ViewLogistics,
      meta: {
        title: '查看物流'
      }
    },
    {
      path: '/publishComments',
      name: 'publishComments',
      component: PublishComments,
      meta: {
        title: '发表评价'
      }
    },
    {
      path: '/publishReview',
      name: 'publishReview',
      component: PublishReview,
      meta: {
        title: '发表评价'
      }
    },
    {
      path: '/commentsSuccess',
      name: 'commentsSuccess',
      component: CommentsSuccess,
      meta: {
        title: '评价成功'
      }
    },
    {
      path: '/commentsDetails',
      name: 'commentsDetails',
      component: CommentsDetails,
      meta: {
        title: '评价详情'
      }
    },
    {
      path: '/addressManage',
      name: 'addressManage',
      component: AddressManage,
      meta: {
        title: '收货地址管理'
      }
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: EditAddress,
      meta: {
        title: '修改收货地址'
      }
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress,
      meta: {
        title: '新增收货地址'
      }
    },
    {
      path: '/systemSetting',
      name: 'systemSetting',
      component: SystemSetting,
      meta: {
        title: '系统设置'
      }
    },
    {
      path: '/phoneBinding',
      name: 'phoneBinding',
      component: PhoneBinding,
      meta: {
        title: '手机号绑定'
      }
    },
    {
      path: '/personalData',
      name: 'personalData',
      component: PersonalData,
      meta: {
        title: '个人信息'
      }
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback,
      meta: {
        title: '反馈与意见'
      }
    },
    {
      path: '/myFans',
      name: 'myFans',
      component: MyFans,
      meta: {
        title: '我的粉丝'
      }
    },
    {
      path: '/refund',
      name: 'refund',
      component: Refund,
      meta: {
        title: '退款/售后'
      }
    },
    {
      path: '/refundService',
      name: 'refundService',
      component: RefundService,
      meta: {
        title: '评价售后服务'
      }
    },
    {
      path: '/selectService',
      name: 'selectService',
      component: SelectService,
      meta: {
        title: '选择服务类型'
      }
    },
    {
      path: '/applyRefund',
      name: 'applyRefund',
      component: ApplyRefund,
      meta: {
        title: '申请退款'
      }
    },
    {
      path: '/myIntegral',
      name: 'myIntegral',
      component: MyIntegral,
      meta: {
        title: '我的积分'
      }
    },
    {
      path: '/shopRevenue',
      name: 'shopRevenue',
      component: ShopRevenue,
      meta: {
        title: '店铺收益'
      }
    },
    {
      path: '/reference',
      name: 'reference',
      component: Reference,
      meta: {
        title: '邀请人手机号'
      }
    }
  ]
})
