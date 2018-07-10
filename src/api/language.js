//引入request模块
import request from '@/utils/request'
//新建语种模型
export function language(num) {
    return request.get('/user/set/language',{
      params:{
        num:num
      }
    })
}
export function getlanguage() {
    return request.get('/user/get/language',{
//    params:{
//      num:num
//    }
    })
}