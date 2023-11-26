'use client';

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

type HttpLib = {
  instance: null | AxiosInstance;
  getInstance: () => AxiosInstance;
};

const httpLib: HttpLib = {
  instance: null,
  getInstance: () => {
    if (!httpLib.instance) {
      console.log(process.env.NEXT_PUBLIC_API_SERVER_URL);
      httpLib.instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
        timeout: 1000 * 10,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return httpLib.instance;
  },
};

export const axiosInstance = httpLib.getInstance();

const http = {
  get: <T>(url: string, config?: AxiosRequestConfig<any>) =>
    axiosInstance.get<T>(url, config),
  post: <T>(url: string, data: any, config?: AxiosRequestConfig<any>) =>
    axiosInstance.post<T>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig<any>) =>
    axiosInstance.delete<T>(url, config),
  put: <T>(url: string, data: any, config: AxiosRequestConfig<any>) =>
    axiosInstance.put<T>(url, data, config),
};

export default http;
