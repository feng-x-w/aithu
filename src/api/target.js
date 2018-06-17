import request from '@/utils/request'
export function target(pid,groupname,remark) {
    return request.post('/sr/model/group/add',{
      params:{
        pid:pid,
        groupname: groupname,
        remark: remark
      }
    })
}
export function cuan(gid) {
    return request.get('/sr/model',{
      params:{
        gid:gid
      }
    })
}
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