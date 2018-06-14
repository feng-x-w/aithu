////写好与后端对接的接口地址
//import request from '@/utils/request'
//export function loginReq(username,password) {  
//return request({
//  url: '/login',
//  method: 'post',
//  data: {
//    username: username,
//    userpass: password
//  }
//})
//} 
import request from '@/utils/request'
export function loginReq(username,password) {
    return request.get('/login',{
      params:{
        username: username,
        userpass: password
      }
    })
}