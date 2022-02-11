import request from "@/utils/request";

export const addOrder = () => request({
  url: '/v1/icbc/addOrder',
  method: 'get',
})