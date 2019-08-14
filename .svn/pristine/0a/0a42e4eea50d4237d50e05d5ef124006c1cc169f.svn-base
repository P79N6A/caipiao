const axios = require('axios');
const qs = require('qs');

const analog = {
    substring: '/api', // 替换地址起始位置
    relpaceAdd: '/static/' // 替换为地址
}

const successCode = [0]

const defaultConfig = {
    baseURL: 'http://h.5988cai.com',
    timeOut: 3000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        // 'Content-Type': 'application/json'
    }
}

// 请求处理拦截
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    };
    // 假数据
    if (config.url.indexOf('.json') >= 0) {
        config.url = config.url.replace(analog.substring, analog.relpaceAdd);
    };
    return config;
}, (error) => {
    console.log('网络异常，请刷新页面重试');
    return Promise.reject(error);
});

// 返回拦截
axios.interceptors.response.use((res) => {
    // 老接口成功返回0
    res.data.code -= 0;
    if (!!res.data.code && !successCode.include(res.data.code)) {
        // 错误的返回值
        throw res.data.message || '参数配置错误';
    } else {
        res.data.code *= 1;
        res.data.data = res.data.data || {};
        if (typeof (res.data.data) === 'string') {
            res.data.data = JSON.parse(res.data.data);
        }
        return res.data;
    }
}, (error) => {
    console.log('请求超时');
    return Promise.reject(error);
});

// 所以请求全部异步操作
class http {
    constructor(config = {}) {
        //Object.assign方法可以很方便地一次向类添加多个方法。
        Object.assign(defaultConfig, config);
        this.init();
    }
    init() {
        // axios配置
        axios.defaults.baseURL = defaultConfig.baseURL; // 基础路径如果传入一个完整路径这个值会被替换掉
        axios.defaults.headers = defaultConfig.headers;
        axios.defaults.timeOut = defaultConfig.timeOut;
    }
    request(options) {
        let { type, url, config } = options;
        type = type.toLowerCase();
        if (type !== 'post' && type !== 'get') {
            throw "xhl_http bad request protocol!";
        };
        if (type === 'post') {
            const { data } = options;
            return axios.post(url, data, config);
        } else {
            return axios.get(url, config);
        }
    }
    // post传值
    post(url, data = {}, config = {}) {
        return this.request({
            type: 'post',
            url,
            data,
            config
        });
    }
    get(url, data = {}, config = {}) {
        for (const i in data) {
            if (Object.prototype.hasOwnProperty.call(data, i)) {
                if (url.indexOf('?') >= 0) {
                    url += `&${i}=${data[i]}`
                } else {
                    url += `?${i}=${data[i]}`
                }
            }
        };
        return this.request({
            type: 'get',
            url,
            config
        });
    }
}

// module.exports.http = http;
export default http