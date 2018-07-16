//模型管理声纹模型
import request from '@/utils/request'
//新建组
export function antistop() {
    return request.post('kw/dict',{
//    params:{
//      pid:pid,
//      groupname: groupname,
//      remark: remark
//    }
    })
}
//查询接口
export function search(keyword) {
    return request.post('kw/dict/search',{
//    params:{
        keyword: keyword
//    }
    })
}
//添加关键词组接口
export function groupadd(name,value) {
    return request.post('kw/group/add',{
//    params:{
        name: name,
        value: value
//    }
    })
}
//显示关键词组接口
export function list() {
    return request.post('kw/group/list',{
//    params:{
//      name: name,
//      value: value
//    }
    })
}
//删除关键词组接口
export function deletes(id) {
    return request.post('kw/group/del',{
//    params:{
        id: id
//    }
    })
}