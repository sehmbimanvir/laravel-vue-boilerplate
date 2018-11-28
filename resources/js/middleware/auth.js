import Store from '../stores/index'

export function AuthGuard (to, from, next) {
    next(Store.getters['AuthStore/isLoggedIn'] ? true : { name: 'Login' })
}
