import Vue from 'vue'
import App from './components/Root.vue'
import routes from './routes/index'
import store from './stores/index'
import BootstrapVue from 'bootstrap-vue'

// Load CSS Files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
new Vue({
    el: '#app',
    router: routes,
    store: store,
    render: h => h(App)
})
