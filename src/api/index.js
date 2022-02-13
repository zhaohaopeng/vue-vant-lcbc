import request from "@/utils/request";

export const addOrder = () => request({
  url: '/v1/icbc/addOrder',
  method: 'get',
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