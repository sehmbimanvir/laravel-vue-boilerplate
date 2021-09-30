import {createApp} from 'vue'
import App from './components/App.vue'
import Store from './stores'
import Routes from './routes'

createApp(App).use(Routes).use(Store).mount("#app");