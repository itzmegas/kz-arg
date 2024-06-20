import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";

export const get = async <T = unknown, D = unknown>(
  url: string,
  options?: AxiosRequestConfig<D>
) => {
  const requestUrl = url;
  const result = await axiosInstance.get<T>(requestUrl, options);
  return result?.data;
};

export const post = async <T = unknown, B = unknown, O = unknown>(
  url: string,
  body?: B,
  options?: AxiosRequestConfig<O>
) => {
  const requestUrl = url;
  const result = await axiosInstance.post<T>(requestUrl, body, options);
  return result?.data;
};

export const put = async <T = unknown, B = unknown, O = unknown>(
  url: string,
  body: B,
  options?: AxiosRequestConfig<O>
) => {
  const requestUrl = url;
  const result = await axiosInstance.put<T>(requestUrl, body, options);
  return result?.data;
};

export const del = async <T = unknown, O = unknown>(
  url: string,
  options?: AxiosRequestConfig<O>
) => {
  const requestUrl = url;
  const result = await axiosInstance.delete<T>(requestUrl, options);
  return result?.data;
};
