import axios from 'axios'
import qs from 'qs'

export const baseURL = process.env.NODE_ENV === "development"?'http://localhost:5173':'http://106.55.188.14';
// export const baseURL = 'http://106.55.188.14/';

// 创建一个独立的axios实例
const service = axios.create({ 
    headers: {
       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    timeout: 10000
});
// 请求拦截
// service.interceptors.request.use(config => {
//     // 自定义header，可添加项目token
//     // config.headers.token = 'token';
//     return config;
// });
// 返回拦截
// service.interceptors.response.use((response)=>{
//   return response
// })

/**
 * post请求
 */
export function post({url, data}) {
	const params = qs.stringify(data)
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            // baseURL,
            data: params,
            method: 'post'
        }).then(res => {
            console.log('res',res);
            
            // if(res.data.code !== 200) {
            //     return Promise.reject({errorMsg: res.data.msg});
            // }
            resolve(res.data);
        }).catch((err = {}) => {
            reject(err);
        })
    });
};

/**
 * get请求
 */
export function get({url, data}) {
	 return new Promise((resolve, reject) => {
		axios({
		    url, 
            // baseURL,
		    data,
		    method: 'get'
		}).then(res => {
		    // if(res.data.code !== 200) {
		    //     return Promise.reject({errorMsg: res.data.msg});
		    // }
		    resolve(res.data);
		}).catch((err = {}) => {
		    reject(err);
		}); 
	 })
};