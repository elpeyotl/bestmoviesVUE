import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_APIENDPOINT,
  params: { api_key: process.env.VUE_APP_APIKEY }
})

console.log(process.env.VUE_APP_APIENDPOINT, 'test')

instance.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  if (!expectedError) {
    console.log('loggin error', error)
    alert('An unexpected error occured')
  }

  return Promise.reject(error)
})
export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
}
