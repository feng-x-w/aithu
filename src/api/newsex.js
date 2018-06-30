//引入request模块
import request from '@/utils/request'
//新建语种模型
export function addlanguage(gender,desc) {
    return request.get('/gre/model/add',{
      params:{
        gender:gender,
        desc:desc
      }
    })
}
//语种模型修改
export function modelUpdate(gender,desc,mid) {
    return request.get('/gre/model/update',{
      params:{
        gender:gender,
        desc:desc,
        mid:mid
      }
    })
}
//获取语种列表
export function languageModel() {
    return request.get('/gre/model',{
//    params:{
//      gender:gender,
//      desc:desc
//    }
    })
}
//点击详情
export function ModelDetail(mid) {
    return request.get('/gre/model/detail',{
      params:{
        mid:mid
      }
    })
}
//语种模型删除
export function ModelDel(mid) {
    return request.get('/gre/model/del',{
      params:{
        mid:mid
      }
    })
}
//语种模型删除
export function ModelTrain(mid) {
    return request.get('/gre/model/train',{
      params:{
        mid:mid
      }
    })
}
//语音删除
export function speechdele(sid) {
    return request.get('/gre/model/speech/del',{
      params:{
        sid:sid
      }
    })
}
//查询
export function modelsearch(gender,status) {
    return request.get('/gre/model/search',{
      params:{
        gender:gender,
        status:status
      }
    })
}