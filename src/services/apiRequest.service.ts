import axios from 'axios';

export const apiRequest = {
  post: async (
    path: string,
    data: any,
    successCb: (res: any) => void,
    errorCb: (e: any) => void,
  ) => {
    try {
      const response = await axios.post(path, data);
      successCb(response);
    } catch (error) {
      errorCb(error);
    }
  },
  get: async (
    path: string,
    successCb: (res: any) => void,
    errorCb: (e: any) => void,
  ) => {
    try {
      const response = await axios.get(path);
      successCb(response);
    } catch (error) {
      errorCb(error);
    }
  },
  put: async (
    path: string,
    data: any,
    successCb: (res: any) => void,
    errorCb: (e: any) => void,
  ) => {
    try {
      const response = await axios.put(path, data);
      successCb(response);
    } catch (error) {
      errorCb(error);
    }
  },
  patch: async (
    path: string,
    data: any,
    successCb: (res: any) => void,
    errorCb: (e: any) => void,
  ) => {
    try {
      const response = await axios.patch(path, data);
      successCb(response);
    } catch (error) {
      errorCb(error);
    }
  },
  delete: async (
    path: string,
    data: any,
    successCb: (res: any) => void,
    errorCb: (e: any) => void,
  ) => {
    try {
      const response = await axios.delete(path, data);
      successCb(response);
    } catch (error) {
      errorCb(error);
    }
  },
};
