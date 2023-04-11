import Http, { TRequestConfig } from './http';

const request = new Http({
    timeout: 60000,
    baseURL: 'https://m.sredy.cn',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export default request;
export const get = (config: TRequestConfig) => request.get(config);
export const post = (config: TRequestConfig) => request.post(config);
export const patch = (config: TRequestConfig) => request.patch(config);
export const deleteA = (config: TRequestConfig) => request.delete(config);
