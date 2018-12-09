import Axios from 'axios'
import Store from '../stores/index'
import { Storage } from '../services/storage'

const API_PATH = 'api'

const HTTP = Axios.create({
    baseURL: `${window.location.protocol}//${window.location.host}/${API_PATH}`
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

export { HTTP }
