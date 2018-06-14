//直接引入
import axios from 'axios'

import Qs from 'Qs'
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data);
    }],
});
export default service