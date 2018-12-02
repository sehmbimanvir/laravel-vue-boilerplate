import ToastTemplate from './toast'

const Toast = {}
const Methods = ['success', 'error', 'warning']
Toast.install = function (Vue, options) {
    Vue.prototype.$toast = function (config) {
        const Instance = new Vue({
            render: (h) => {
                return h(ToastTemplate, {
                    props: config
                })
            }
        })
        document.body.appendChild(Instance.$mount().$el)
        setTimeout(() => {
            document.body.removeChild(document.getElementsByClassName('vue-toast')[0])
        }, 1000)
    }
    Methods.forEach(method => {
        Vue.prototype.$toast[method] = (config) => {
            config.type = method
            return Vue.prototype.$toast(config)
        }
    })
    // Vue.prototype.$toast.show = function (config) {
    //     return Vue.prototype.$toast(config)
    // }
}
export default Toast
