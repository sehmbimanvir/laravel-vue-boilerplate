import Axios from 'axios'
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

export {
    HTTP
}
