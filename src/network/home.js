/*管理 - 首页所有请求的url*/

import{request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
