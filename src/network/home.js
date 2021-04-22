import {request} from "@/network/request";

//对首页的所有请求做一个统一的管理
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
