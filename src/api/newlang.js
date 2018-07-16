//引入request模块
import request from '@/utils/request'
//新建语种模型
export function addlanguage(language,desc) {
    return request.post('/lre/model/add',{
//    params:{
        language:language,
        desc:desc
//    }
    })
}
//语种模型修改
export function modelUpdate(language,desc,mid) {
    return request.post('/lre/model/update',{
//    params:{
        language:language,
        desc:desc,
        mid:mid
//    }
    })
}
//获取语种列表
export function languageModel() {
    return request.post('/lre/model',{
//    params:{
//      language:language,
//      desc:desc
//    }
    })
}
//点击详情
export function ModelDetail(mid) {
    return request.post('/lre/model/detail',{
//    params:{
        mid:mid
//    }
    })
}
//语种模型删除
export function ModelDel(mid) {
    return request.post('/lre/model/del',{
//    params:{
        mid:mid
//    }
    })
}
//语种模型训练
export function ModelTrain(mid) {
    return request.post('/lre/model/train',{
//    params:{
        mid:mid
//    }
    })
}
//语音删除
export function speechdele(sid) {
    return request.post('/lre/model/speech/del',{
//    params:{
        sid:sid
//    }
    })
}
//查询
export function modelsearch(language,status) {
    return request.post('/lre/model/search',{
//    params:{
        language:language,
        status:status
//    }
    })
}
//复位
export function resetInit() {
    return request.post('/lre/model/reset',{
//    params:{
//      language:language,
//      status:status
//    }
    })
}