import Axios from 'axios'
import { Storage } from '../services/storage'
import Store from '../stores/index'

const HTTP = Axios.create({
    baseURL: 'http://laravel-blog.test/api/'
})

HTTP.interceptors.response.use(success => {
    return success
}, error => {
    Store.commit('MiscStore/CATCHERROR', error)
    return Promise.reject(error)
})

HTTP.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${Storage.get('token')}`
    return config
})

export {
    HTTP
}
