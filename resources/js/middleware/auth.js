import Store from '../stores/index'

export function AuthGuard (to, from, next) {
    next(Store.getters['AuthStore/token'] ? true
    : { name: 'Login', params: { message: 'Unauthorized', type: 'error' } })
}
