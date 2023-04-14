import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { setLoading } from '@/components/Loading';
import { getScum, setScum, clearAll } from './auth';

export interface TRequestInterceptors<T = AxiosResponse> {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCache?: (error: any) => any
    responseInterceptor?: (res: T) => T
    responseInterceptorCache?: (error: any) => any
}

export interface TRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: TRequestInterceptors<T>
}

class Http {
    instance: AxiosInstance;
    interceptors?: TRequestInterceptors;

    constructor(config: TRequestConfig) {
        this.instance = axios.create(config);
        this.interceptors = config.interceptors;
    }

    // 单独传的拦截器
    async request<T>(config: TRequestConfig<T>): Promise<T> {
        // 接口缓存
        const data = await getScum(config.url);
        if (data) {
            console.log('cache----');
            setLoading(false);
            return Promise.resolve(JSON.parse(data));
        }
        setLoading(true);
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config);
            }
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors.responseInterceptor(res);
                    }
                    console.log('request---success----');
                    !config.url.includes('getConfig') && setScum(config.url, JSON.stringify(res));
                    setLoading(false);
                    resolve(res);
                    // clearAll();
                })
                .catch((err) => {
                    console.log('err---', err);
                    setLoading(false);
                    reject(err);
                });
        });
    }
    get<T>(config: TRequestConfig<T>): Promise<T> {
        return this.request({ ...config, method: 'GET' });
    }
    post<T>(config: TRequestConfig<T>): Promise<T> {
        return this.request({ ...config, method: 'POST' });
    }
    patch<T>(config: TRequestConfig<T>): Promise<T> {
        return this.request({ ...config, method: 'PATCH' });
    }
    delete<T>(config: TRequestConfig<T>): Promise<T> {
        return this.request({ ...config, method: 'DELETE' });
    }
}

export default Http;
