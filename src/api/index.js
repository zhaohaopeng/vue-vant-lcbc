import request from "@/utils/request";


export const queryOrderParam = () => request({
  url: '/v1/icbc/queryOrderParam',
  method: 'get',
})

export const addOrder = () => request({
  url: '/v1/icbc/addOrder',
  method: 'get',
})

export const createRygOrder = () => request({
  url: '/v1/icbc/createRygOrder',
  method: 'get',
})

// 获取账户信息
export const queryBankUserInfo = (data) => request({
  url: '/v1/oath/queryBankUserInfo',
  method: 'post',
  data
})

// 查询商品信息

export const queryCommodity = (data) => request({
  url: '/v1/icbc/queryCommodity',
  method: 'get',
  params: data
})


// 创建账户（H5无感知注册时调用）
export const createUser = (data) => request({
  url: '/v1/account/createUser',
  method: 'post',
  data
})

// 查询账户信息
export const queryUserInfo = (data) => request({
  url: '/v1/account/queryUserInfo',
  method: 'post',
  data
})

// 查询活动信息
export const queryByIdActivity = (data) => request({
  url: '/v1/activity/queryByIdActivity',
  method: 'post',
  data
})

// 创建订单
export const createOrder = (data) => request({
  url: '/v1/order/createOrder',
  method: 'post',
  data
})

// 查询指定人员订单信息
export const queryOrderInfo = (data) => request({
  url: '/v1/order/queryOrderInfo',
  method: 'post',
  data
})


export const checkAuthorizationNew = (data) => request({
  url: 'http://mmall4.dccnet.com.cn/mobile/member/checkAuthorizationNew.jhtml',
  method: 'post',
  data
})

// 获取用户信息
export const queryUserInfoicbc = (data) => request({
  url: '/v1/icbc/queryUserInfo',
  method: 'get',
  params: data
})


