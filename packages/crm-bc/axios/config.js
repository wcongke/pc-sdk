/**
 * @file Axios基础配置，"请求/响应"拦截，不涉及业务逻辑。
 */
import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'

  return config
})

axios.interceptors.response.use((response) => {
  const data = response.data

  return data
})
