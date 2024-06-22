import axios from 'axios';
import qs from 'qs';
import Vue from "vue";
import store from '../store'

// 创建axios实例
//let BASE_API = 'https://gjmzsc.yystars.com/YYQ.API.WebManage/api';
let BASE_API = 'https://mzjksc.yystars.com/YYQ.API.WebManage/api'
// if(httpName.indexOf('localhost')=='-1'){
//     BASE_API=httpName+'/yyq.api.webmanage/api'
// }
let href = window.location.href
if(href.indexOf("mzjksc.yystars.com") == -1){
    if(href.indexOf("app.wsjkw.suzhou.com.cn") == -1 && href.indexOf("localhost:8093") == -1){
        if(href.indexOf("YYQ") != -1){
            if(href.indexOf("V2.0.0") != -1){
                BASE_API= href.split('YYQ')[0]+'YYQ.API.WebManage_V2.0.0/api';
            }
            else{
                BASE_API= href.split('YYQ')[0]+'YYQ.API.WebManage/api';
            }

        }
    }
    else{    //苏州
        BASE_API = 'http://172.25.232.20:8093/YYQ.API.WebManage/api'
    }
}

Vue.prototype.BASE_API=BASE_API.replace('/api','')

const service = axios.create({
    //baseURL:location.hostname=='localhost'?'':process.env.BASE_API, // 跨域情况
    baseURL:BASE_API, // api的base_url
    timeout: 15000, // 请求超时时间
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

// request拦截器
service.interceptors.request.use(config => {
    if (config.method === 'post' && (config.url.indexOf('/Class/SaveClassItem') > -1|| config.url.indexOf('/Class/SaveClass') == -1)) {
        config.data = qs.stringify(config.data);
    }
    if(config.url.indexOf('/Class/SaveClass') > -1 && config.url.indexOf('/Class/SaveClassItem') == -1){
        config.headers['content-type'] = 'application/json'
    }
    if (store.getters.token) {
        console.log("ticket " )
        config.headers['Authorization'] = "ticket "  // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
}, error => {
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
    let data = res;//JSON.parse(res);
        if (!data.isSuccess) {
           
            return Promise.reject('error')
        } else {
            return data
        }
    },
    error => {
        console.log('err' + error) // for debug
      
        return Promise.reject(error)
    }
)
export default service
