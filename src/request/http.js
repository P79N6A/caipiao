import axios from 'axios'; // 引入axios
import QS from 'qs';// 引入qs模块，用来序列化post类型的数据，后面会提到
import { Toast,MessageBox  } from 'mint-ui';//提示框组件
import store from '@/store/index';
import router from '../router/index.js'
//要创建一个新的axios，直接在axios上定义属性总会有问题
var instance =  axios.create();
// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     instance.defaults.baseURL = '/api';}
// else if (process.env.NODE_ENV == 'debug') {
//     instance.defaults.baseURL = '/api';
// }
// else if (process.env.NODE_ENV == 'production') {
//     instance.defaults.baseURL = '/';
// }


//通过instance.defaults.timeout设置默认的请求超时时间。例如超过了10s，就会告知用户当前请求超时，请刷新等。
instance.defaults.timeout = 4000

//post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 请求拦截器
instance.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = QS.stringify(config.data);
    };
    return config;
}, (error) => {
    console.log('网络异常，请刷新页面重试');
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
         
        // if(response.config.url.indexOf('.json') >-1){
        //     console.log(response.config.url)
        // }
        // console.log(response)
        if (response.status === 200) {
            if (response.data.Resp) {
                /*
                返回的数据格式不一样，一部分接口数据没有Resp参数（如json）
                如果没有Resp，response.data.Resp.code不是false,而且直接中断，执行下一个请求
                */
                if (response.data.Resp.code == -1) {
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }else if(response.data.Resp.code == 1&&response.data.Resp.desc=='用户未登录'){
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }else{
                    return Promise.resolve(response);
                }
            }else{
                return Promise.resolve(response);
            }
           
            
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case "1":
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    Toast('登录过期，请重新登录')
                    //   Toast({
                    //     message: '登录过期，请重新登录',
                    //     duration: 1000,
                    //     forbidClick: true
                    // });
                    // // 清除token
                    // // localStorage.removeItem('token');
                    // // store.commit('loginSuccess', null);
                    // // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    // setTimeout(() => {
                    //     router.replace({
                    //         path: '/login',
                    //         query: {
                    //             redirect: router.currentRoute.fullPath
                    //         }
                    //     });
                    // }, 1000);
                    break;

                // 404请求不存在
                case 404:
                    Toast('网络请求不存在')
                    // Toast({
                    //     message: '网络请求不存在',
                    //     duration: 1500,
                    //     forbidClick: true
                    // });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast(error.response.data.message)
                    // Toast({
                    //     message: error.response.data.message,
                    //     duration: 1500,
                    //     forbidClick: true
                    // });
            }
            return Promise.reject(error.response);
        }
    }
);


export function get(url, params){
    return new Promise((resolve, reject) =>{
        instance.get(url, {
            params: params
        }).then(res => {
            resolve&&resolve(res.data);
        }).catch(err =>{
            reject&&reject(err.data)
        })
    });
}


export function post(url, params) {
    return new Promise((resolve, reject) => {
        instance.post(url, params)
        .then(res => {
            resolve&&resolve(res.data);
        })
        .catch(err =>{
            reject&&reject(err.data)
        })
    });
}
// module.exports.http = http;
//export default http