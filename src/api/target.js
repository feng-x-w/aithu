//模型管理声纹模型
import request from '@/utils/request'
//初始化渲染页面
export function group() {
    return request.post('/sr/model/group',{
//    params:{
//      pid:pid,
//      groupname: groupname,
//      remark: remark
//    }
    })
}
//新建组
export function target(pid,groupname,remark) {
    return request.post('/sr/model/group/add',{
//    params:{
        pid:pid,
        groupname: groupname,
        remark: remark
//    }
    })
}
//点击获取
export function cuan(gid, page, pagesize) {
    return request.post('/sr/model',{
//    params:{
        gid:gid,
        page:page,
        pagesize:pagesize
//    }
    })
}
/*
//模型添加接口speaker,gid,idcard,birth,gender,nation,room,address,tel,desc,pic  data,config
export function addTargetParson() {
    return request.post('/sr/model/add',params,{
      formData:formData,
      header:{
        'Content-Type': 'multipart/form-data'
      }
//    params:{
//      speaker:speaker,
//      gid:gid,
//      idcard:idcard,
//      birth:birth,
//      gender:gender,
//      nation:nation,
//      room:room,
//      address:address,
//      tel:tel,
//      desc:desc,
//      pic:pic
//    }
    }
}
*/
//模型详情接口
export function detail(mid) {
    return request.post('/sr/model/detail',{
//    params:{
        mid:mid
//    }
    })
}
//模型添加语音接口
export function newVideo(mid,data) {
    return request.post('/sr/model/speech/add',{
//    params:{
        mid:mid,
        data:data
//    }
    })
}
//模型训练接口
export function drillModel(mid) {
    return request.post('/sr/model/train',{
//    params:{
        mid:mid
//    }
    })
}
//模型组修改接口
export function Alter(groupname,gid,remark) {
    return request.post('/sr/model/group/edit',{
//    params:{
        groupname:groupname,
        gid:gid,
        remark:remark
//    }
    })
}
//模型组删除接口
export function dele(gid) {
    return request.post('/sr/model/group/del',{
//    params:{
        gid:gid
//    }
    })
}
//模型删除接口
export function modelDele(mid) {
    return request.post('/sr/model/del',{
//    params:{
        mid:mid
//    }
    })
}
//模型修改接口
/*
export function updateModel(speaker,idcard,birth,gender,nation,room,address,tel,gid,mid,desc,pic) {
    return request.post('/sr/model/update',{
      params:{
        speaker:speaker,
        idcard:idcard,
        birth:birth,
        gender:gender,
        nation:nation,
        room:room,
        address:address,
        tel:tel,
        gid:gid,
        mid:mid,
        desc:desc,
        pic:pic
      }
    })
}
*/
//模型组监听模糊查询接口
export function gname(groupname) {
    return request.post('/sr/model/group/search',{
//    params:{
        groupname:groupname,
//    }
    })
}
//模型查询接口
export function inquire(speaker,idcard,birth,gender,nation,room,address,gid,page,pagesize) {
    return request.post('/sr/model/search',{
//    params:{
        speaker:speaker,
        idcard:idcard,
        birth:birth,
        gender:gender,
        nation:nation,
        room:room,
        address:address,
        gid:gid,
        page:page,
        pagesize:pagesize
//    }
    })
}
//语音列表删除单个语音
export function speechDel(sid) {
    return request.post('/sr/model/speech/del',{
//    params:{
        sid:sid
//    }
    })
}