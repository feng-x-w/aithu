//引入request模块
import request from '@/utils/request'
//新建性别模型
export function addlanguage(gender,desc) {
    return request.post('/gre/model/add',{
//    params:{
        gender:gender,
        desc:desc
//    }
    })
}
//性别模型修改
export function modelUpdate(gender,desc,mid) {
    return request.post('/gre/model/update',{
//    params:{
        gender:gender,
        desc:desc,
        mid:mid
//    }
    })
}
//获取性别列表
export function languageModel() {
    return request.post('/gre/model',{
//    params:{
//      gender:gender,
//      desc:desc
//    }
    })
}
//点击详情
export function ModelDetail(mid) {
    return request.post('/gre/model/detail',{
//    params:{
        mid:mid
//    }
    })
}
//性别模型删除
export function ModelDel(mid) {
    return request.post('/gre/model/del',{
//    params:{
        mid:mid
//    }
    })
}
//性别模型删除
export function ModelTrain(mid) {
    return request.post('/gre/model/train',{
//    params:{
        mid:mid
//    }
    })
}
//语音删除
export function speechdele(sid) {
    return request.post('/gre/model/speech/del',{
//    params:{
        sid:sid
//    }
    })
}
//查询
export function modelsearch(gender,status) {
    return request.post('/gre/model/search',{
//    params:{
        gender:gender,
        status:status
//    }
    })
}
//复位
export function resetInit() {
    return request.post('/gre/model/reset',{
//    params:{
//      gender:gender,
//      status:status
//    }
    })
}