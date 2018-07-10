//任务管理
import request from '@/utils/request'
//创建新任务
export function newtaskadd(taskname, tasknum, enhance, cleaning, sr, ks, li, gi, kgid, keyword, pnum, idx) {
    return request.get('/task/add',{
      params:{
        taskname:taskname,
        tasknum:tasknum,
        enhance:enhance,
        cleaning:cleaning,
        sr:sr,
        ks:ks,
        li:li,
        gi:gi,
        kgid:kgid,
        keyword:keyword,
        pnum: pnum,
        idx: idx
      }
    })
}
//所有文件上传成功时开始任务
export function taskStart(taskid) {
    return request.get('/task/start',{
      params:{
        taskid:taskid
      }
    })
}
//页面所有任务数据
export function tasklist(page, pagesize) {
    return request.get('/task/list',{
      params:{
        page:page,
        pagesize:pagesize
      }
    })
}
//查看按钮传参
export function result(taskid, page, pagesize) {
    return request.get('/task/result',{
      params:{
        taskid:taskid,
        page:page,
        pagesize:pagesize
      }
    })
}
//识别任务管理获取所有任务
export function AllTasks(taskid, page, pagesize) {
    return request.get('/task/result',{
      params:{
        taskid:taskid,
        page:page,
        pagesize:pagesize
      }
    })
}
//识别任务管理查询任务
export function QueryTasks(speaker, taskid, keyword, gender, language, taskname, address, handletime, starttime, endtime, page, pagesize) {
    return request.get('/task/result/search',{
      params:{
        speaker: speaker,
        taskid:taskid,
        keyword: keyword,
        gender: gender,
        language: language,
        taskname: taskname,
        address: address,
        handletime: handletime,
        starttime: starttime,
        endtime: endtime,
        page:page,
        pagesize:pagesize
      }
    })
}
//获取远端列表
export function files() {
    return request.get('/task/file',{
//    params:{
//      taskid:taskid
//    }
    })
}
//上传远程文件夹
export function ftot(dirname,taskid) {
    return request.get('/task/ftot',{
      params:{
        dirname:dirname,
        taskid:taskid
      }
    })
}
//上传远程文件夹
export function search(taskname,tasknum,tasktype,taskstatus,handler,starttime,endtime, page,pagesize) {
    return request.get('/task/search',{
      params:{
        taskname:taskname,
        tasknum:tasknum,
        tasktype:tasktype,
        taskstatus:taskstatus,
        handler:handler,
        starttime:starttime,
        endtime:endtime,
        page:page,
        pagesize:pagesize
      }
    })
}
//点击下载文件
export function download(filepath) {
    return request.get('/task/download',{
      params:{
        filepath:filepath
      }
    })
}