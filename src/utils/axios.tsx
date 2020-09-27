import axios from 'axios'
import _ from 'lodash'
import qs from "querystringify"
// import pkage from 'pkConfig'  //获取public目录下的config.js
import { message } from "antd"
window.baseUrl = 'http://192.168.140.151:8080/explorer/'
var instance = axios.create({
    // baseURL: pkage.axios,
    baseURL: window.baseUrl,
    timeout: 60000,
    // withCredentials: true,
    transformRequest: [function (data) {
        data = data || {}
        // return JSON.stringify(data) // 传递的 application/json    1. json 格式的话 return JSON.stringfy(data) 2.设置content-type 为"Content-Type": "application/json"
        return qs.stringify(data); // 传递 application/x-www-form-urlencoded 2. 非JSON 格式 return qs.stringfy(data) 2.可设置也可不设置 content-type

    }],
    headers: {
        "Accept": "*/*",
        // "Content-Type": "application/json"  //第二种需设置
    },
    validateStatus: function (status) {
        if (status >= 200 && status <= 300) {
            return true
        } else if (status === 401) {

        } else if (status === 500) {
            return true
        }
        return false
    }
})
instance.interceptors.response.use((result) => {
    if (result.data.status === 0) { }
    return result.data
}, (thrown) => {
    message.error('接口请求超时')
    if (axios.isCancel(thrown)) {
        return Promise.reject("请求被阻断");
    }
    return Promise.reject(thrown);
})

export const post = function (url, opts = {}) {
    return instance.post(url, {
        ...opts
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
        }
    });
}

export const get = (url, opts, config = {}) => {
    var CancelToken = axios.CancelToken;
    var token = new CancelToken(function executor(c) {
        // base.sources.push(c)
    })
    return instance.get(url, {
        params: {
            ...opts
        },
        cancelToken: token,
        ...config
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
        }
    });
}

export const postJson = function (url, opts = {}) {
    return instance.post(url,
        { ...opts }, {
        transformRequest: function (data) {
            // 对 data 进行任意转换处理
            return JSON.stringify(data)
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
        }
    });
}
