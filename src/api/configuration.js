//配置文件
import request from '@/utils/request'
//节点配置
export function nodeConfig() {
    return request.post('/config/device',{

    })
}
//参数配置
export function configindex(page, pagesize) {
    return request.post('/config/index',{
        page: page,
        pagesize: pagesize
    })
}
//节点配置修改
export function nodeEdit(id, name, address, role) {
    return request.post('/config/device/edit',{
        id: id,
        name: name,
        address: address,
        role: role
    })
}
//参数配置修改
export function configEdit(id, sname, value) {
    return request.post('/config/edit',{
        id: id,
        sname: sname,
        value: value
    })
}
//参数配置重置
export function configReset() {
    return request.post('/config/reset',{
        // id: id,
        // sname: sname,
        // value: value
    })
}
//节点选中状态
export function nodestatus(name, prostatus, prestatus) {
    return request.post('/config/switch',{
        name: name,
        prostatus: prostatus,
        prestatus: prestatus
    })
}
