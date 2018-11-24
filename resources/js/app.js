import Vue from 'vue'
import App from './components/Root.vue'
import routes from './routes/index'

new Vue({
    el: '#app',
    router: routes,
    render: h => h(App)
})
