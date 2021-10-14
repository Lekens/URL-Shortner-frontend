import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const config = {
  baseURL: baseUrl,
  headers: { Authorization: process.env.REACT_APP_API_KEY as string },
};
export const apiRequest = {
  post: async (path: string, data: { longUrl?: string; shortUrl?: string }) => {
    try {
      return await axios({
        url: path,
        method: 'post',
        ...config,
        responseType: 'json',
        data,
      })
        .then((response) => response)
        .catch((error) => error);
    } catch (error) {
      return error;
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
