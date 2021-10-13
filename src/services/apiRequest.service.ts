import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const config = {
  baseURL: baseUrl,
  headers: { Authorization: process.env.REACT_APP_API_KEY as string },
};
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
  get: async (path: string) => {
    try {
      return await axios({
        url: path,
        method: 'get',
        ...config,
        responseType: 'json',
      })
        .then((response) => response)
        .catch((error) => error);
    } catch (error) {
      return error;
    }
  },
};
