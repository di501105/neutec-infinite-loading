// http/index.ts
import axios from 'axios'
import Cookies from 'js-cookie'
import router from '@/router'
import i18n from '@/plugins/i18n'
import { message } from 'ant-design-vue'
import { Settings } from '@/config/index'

const { VITE_ROOT_PATH, MODE } = import.meta.env
const { t } = i18n.global as any
// 創建axios的一個實例
const instance = axios.create({
  baseURL: `${Settings.base.APIBaseURL}${VITE_ROOT_PATH}`, // 接口统一域名    timeout: 6000, // 設置超時
  timeout: 60 * 1000,
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8;'
  }
})
// 請求攔截器
instance.interceptors.request.use(
  (config: any) => {
    // 每次發送請求之前判斷是否存在token，如果存在，則統一在http請求的header都加上token，不用每次請求都手動添加了
    const token = MODE === 'development'
      ? `Bearer ${Cookies.get('accessToken')}`
      : `Bearer ${localStorage.getItem('accessToken')}`
    token && (config.headers.Authorization = token)
    // 若請求方式為post，則將data參數轉為JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error) =>
  // 對請求錯誤做些什麼
    Promise.reject(error)
)

// 響應攔截器
instance.interceptors.response.use(
  (response) => {
    // 響應成功
    console.log('響應成功')
    return response.data
  },
  (error) => {
    console.log('響應錯誤', error)
    // 響應錯誤
    if (error.response && error.response.status) {
      const status = error.response.status
      const code = error.response.data.code
      switch (status) {
        case 500:
        case 503:
          message.error(t('general.numberCreateErrorDesc1'))
          break
        case 404:
          message.error(t('general.numberCreateErrorDesc1'))
          break
        case 403:
          router.push({ name: 'ErrorPage', query: { status } })
          break
        case 400:
          if (code === 'error.duplicate.locationCode') {
            message.error(t('network.codeDuplicateError'))
          }
          break
        case 401:
          if (MODE === 'development') {
            document.location.href = 'http://localhost:8080/login'
          } else {
            document.location.href = '/login'
          }
          break
      }
      return error
    }
    return error
  }
)
export default instance
