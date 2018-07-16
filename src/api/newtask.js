//任务管理
import request from '@/utils/request'
//创建新任务
export function newtaskadd(taskname, tasknum, enhance, cleaning, sr, ks, li, gi, kgid, keyword, pnum, idx) {
    return request.post('/task/add',{
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
    })
}
//所有文件上传成功时开始任务
export function taskStart(taskid) {
    return request.post('/task/start',{
        taskid:taskid
    })
}
//页面所有任务数据
export function tasklist(page, pagesize) {
    return request.post('/task/list',{
        page:page,
        pagesize:pagesize
    })
}
//查看按钮传参
export function result(taskid, page, pagesize) {
    return request.post('/task/result',{
        taskid:taskid,
        page:page,
        pagesize:pagesize
    })
}
//识别任务管理获取所有任务
export function AllTasks(taskid, page, pagesize) {
    return request.post('/task/result',{
        taskid:taskid,
        page:page,
        pagesize:pagesize
    })
}
//识别任务管理查询任务
export function QueryTasks(speaker, taskid, keyword, gender, language, taskname, address, handletime, starttime, endtime, page, pagesize) {
    return request.post('/task/result/search',{
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
    })
}
//获取远端列表
export function files() {
    return request.post('/task/file',{
//      taskid:taskid
    })
}
//上传远程文件夹
export function ftot(dirname,taskid) {
    return request.post('/task/ftot',{
        dirname:dirname,
        taskid:taskid
    })
}
//查询
export function search(taskname,tasknum,tasktype,taskstatus,handler,starttime,endtime, page,pagesize) {
    return request.post('/task/search',{
//    params:{
        taskname:taskname,
        tasknum:tasknum,
        tasktype:tasktype,
        taskstatus:taskstatus,
        handler:handler,
        starttime:starttime,
        endtime:endtime,
        page:page,
        pagesize:pagesize
//    }
    })
}
//点击下载文件
export function download(filepath) {
    return request.post('/task/download',{
        filepath:filepath
    })
}