import Store from '../stores/index'

export function GuestGuard (to, from, next) {
    next(!Store.getters['AuthStore/token'] ? true : { name: 'Home' })
}
