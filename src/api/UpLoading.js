import request from '@/utils/request'
export function UpLoading(files) {
    return request.get('/sr/model/speech/add?mid=1',{
      params:{
		    files
      }
    })
}