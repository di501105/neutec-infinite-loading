// http/index.ts
import axios from 'axios';
import { message } from 'ant-design-vue';

const { VITE_API_BASE_URL } = import.meta.env;

// 創建axios的一個實例
const instance = axios.create({
  baseURL: VITE_API_BASE_URL, // 接口统一域名    timeout: 6000, // 設置超時
  timeout: 60 * 1000,
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8;'
  },
});
// 請求攔截器
instance.interceptors.request.use(
  (config: any) => {
    // 每次發送請求之前判斷是否存在token，如果存在，則統一在http請求的header都加上token，不用每次請求都手動添加了
    // 若請求方式為post，則將data參數轉為JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  (error) =>
    // 對請求錯誤做些什麼
    Promise.reject(error)
);

// 響應攔截器
instance.interceptors.response.use(
  (response) => {
    // 響應成功
    return response.data;
  },
  (error) => {
    // 響應錯誤
    if (error.response && error.response.status) {
      const { status } = error.response;
      switch (status) {
        case 500:
        case 503:
          message.error('Error');
          break;
        case 404:
          message.error('Error');
          break;
        case 403:
          message.error('Error');
          break;
        case 400:
          message.error('Error');
          break;
        case 401:
          message.error('Error');
          break;
        default:
          break;
      }
      return error;
    }
    return error;
  }
);
export default instance;
