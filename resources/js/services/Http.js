import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://laravel-blog.test/api/'
})
