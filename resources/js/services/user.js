import { HTTP } from './http'

const urlPrefix = 'user'

const User = {
    changePassword (data) {
        return HTTP.post(`${urlPrefix}/change-password`, data)
    },
    updateProfile (data) {
        return HTTP.post(`${urlPrefix}/profile`, data)
    }
}

export { User }
