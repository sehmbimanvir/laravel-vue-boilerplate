import Vue from 'vue'
import App from './components/Root.vue'
import routes from './routes/index'
import store from './stores/index'
import Toast from './plugins/toast'
Vue.use(Toast)
new Vue({
    el: '#app',
    router: routes,
    store: store,
    render: h => h(App)
})
