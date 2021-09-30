import { HTTP } from './http'

const endPoint = 'post'

const Post = {
    list () {
        return HTTP.get(endPoint)
    },

    show (id) {
        return HTTP.get(`${endPoint}/${id}`)
    },

    store (post) {
        return HTTP.post(endPoint, post)
    },

    update (post, id) {
        return HTTP.put(`${endPoint}/${id}`, post)
    },

    delete (id) {
        return HTTP.delete(`${endPoint}/${id}`)
    }
}

export { Post }
