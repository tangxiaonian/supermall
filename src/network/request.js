import axios from "axios";

const instance = axios.create({
    baseURL: "http://106.54.54.237:8000/api/v1",
    // baseURL: "http://123.207.32.32:8000/api/v1",
    timeout:5000
});

// 请求拦截器
instance.interceptors.request.use(function (config) {

    return config; // 放行拦截

},function (error) {

    // console.log(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {

    return response;

},function (error) {

    // console.log(error);
});

export async function request(config,success,fail) {

    let result = null;

    try {
        result = await instance.request(config);

        success(result);

    }catch (e) {

        fail(e);
    }

}