import {createWebHistory, createRouter} from 'vue-router'
import AuthRoutes from './Auth'

const routes = [...AuthRoutes]

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'font-bold',
  routes
})
