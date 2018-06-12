////写好与后端对接的接口地址
//import request from '@/utils/request'
//export function login(name,password) {  
//return request({  
//  url: '/login.json',  
//  method: 'post',  
//  data: {  
//    name,  
//    password  
//  }   
//})  
//} 
import request from '@/utils/request'
export function loginReq(username,password) {
    return request.post('http://192.168.1.118/login/?username=admin&userpass=123456',{
        loginName: username,
        loginPassword: password
    })
}