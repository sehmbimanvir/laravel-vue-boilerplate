import { HTTP } from './http'

const Post = {
    list () {
        return HTTP.get('post')
    },

    show (id) {
        return HTTP.get(`post/${id}`)
    },

    store (post) {
        return HTTP.post('post', post)
    },

    update (post, id) {
        return HTTP.put(`post/${id}`, post)
    },

    delete (id) {
        return HTTP.delete(`post/${id}`)
    }
}

export { Post }
