import request from '@/utils/request'
//新建组
export function target(pid,groupname,remark) {
    return request.post('/sr/model/group/add',{
      params:{
        pid:pid,
        groupname: groupname,
        remark: remark
      }
    })
}
//点击获取
export function cuan(gid) {
    return request.get('/sr/model',{
      params:{
        gid:gid
      }
    })
}
//模型添加接口
export function addTargetParson(speaker,gid,idcard,birth,gender,nation,room,address,tel) {
    return request.get('/sr/model/add',{
      params:{
        speaker:speaker,
        gid:gid,
        idcard:idcard,
        birth:birth,
        gender:gender,
        nation:nation,
        room:room,
        address:address,
        tel:tel
      }
    })
}
//模型详情接口
export function detail(mid) {
    return request.get('/sr/model/detail',{
      params:{
        mid:mid
      }
    })
}
//模型添加语音接口
export function newVideo(mid,data) {
    return request.get('/sr/model/speech/add',{
      params:{
        mid:mid,
        data:data
      }
    })
}
//模型训练接口
export function drillModel(mid) {
    return request.get('/sr/model/train',{
      params:{
        mid:mid
      }
    })
}