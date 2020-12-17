import axios, {Method} from 'axios';
import {throwErr} from '@/utils/throwErr'; // utils 捕捉服务端http状态码的方法
import {getToken} from '@/utils/auth';
import {RES_CODE} from '@/global';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

let instance = axios.create({
  baseURL: '/sjztapi',
  timeout: 10000,
  withCredentials: true,
});

type Method_TYPE = 'form' | Method;

/**
 * 添加配置
 */
instance.interceptors.request.use(
  (config: any): object => {
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error: object): object => {
    return Promise.reject(error);
  }
);

/**
 * 添加响应拦截器
 */
instance.interceptors.response.use(
  response => {
    if (response.data.code === RES_CODE.SUCCESS) {
      // 服务端定义的响应code码为SUCCESS时请求成功
      return Promise.resolve(response.data); // 使用Promise.resolve 正常响应
    } else {
      return Promise.resolve(response.data);
    }
  },
  error => {
    if (error && error.response) {
      const res = {
        code: 0,
        msg: '',
      };
      res.code = error.response.status;
      res.msg = throwErr(error.response.status, error.response); // throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
      return Promise.reject(res);
    }
    return Promise.reject(error);
  }
);

/**
 * 抛出封装的axios
 * @param method
 * @param url
 * @param data?? 响应结果
 */
// @ts-ignore

export const request = <URL extends keyof API>(method: Method_TYPE, url: string, data?: API[URL]): Promise<RESPONSE> => {
  if (method === 'post') {
    return instance.post(url, data);
  } else if (method === 'get') {
    return instance.get(url, {
      params: data,
    });
  } else if (method === 'form') {
    const formData = new FormData();
    for (let item in data) {
      // @ts-ignore
      if (data.hasOwnProperty(item)) {
        formData.append(item, (data as any)[item]);
      }
    }
    return instance.post(url, data);
  }
};
