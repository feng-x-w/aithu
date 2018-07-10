import request from '@/utils/request'
export function UpLoading(files) {
    return request.get('/sr/model/speech/add?mid=1',{
      params:{
		    files
      }
    })
}
//export function useredit(idnumber, tel, email, address, signature, file) {
//  return request.get('/user/info/edit',{
//    params:{
//		    idnumber:idnumber,
//		    tel:tel,
//		    email:email,
//		    address:address,
//		    signature:signature,
//		    file:file
//    }
//  })
//}
export function userinfo() {
    return request.get('/user/info',{
//    params:{
//		    username:username,
//		    password:password,
//		    email:email,
//		    description:description,
//		    role:role,
//    }
    })
}
export function userchecked(passwd) {
    return request.get('/user/passwd/check',{
      params:{
		    passwd:passwd
      }
    })
}
export function userpasswdedit(newpasswd, confirm) {
    return request.get('/user/passwd/edit',{
      params:{
		    newpasswd:newpasswd,
        confirm:confirm
      }
    })
}
