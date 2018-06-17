import request from '@/utils/request'
export function disgroup() {//pid,groupname,remark
    return request.get('/sr/model/group',{
//    params:{
//      pid:pid,
//      groupname: groupname,
//      remark: remark
//    }
    })
}