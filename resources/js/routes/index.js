import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import ListPost from '../components/Posts/ListPost'
import AddPost from '../components/Posts/AddPost'
import Login from '../components/Auth/Login'
import Dashboard from '../components/User/Dashboard'
import Store from '../stores/index'
import { Storage } from '../services/storage'
import { AuthGuard } from '../middleware/auth'
import { GuestGuard } from '../middleware/guest'

Vue.use(VueRouter)

const routes = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Home'
            }
        }, {
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                title: 'About'
            }
        }, {
            path: '/posts',
            name: 'ListPost',
            component: ListPost,
            meta: {
                title: 'All Posts'
            }
        }, {
            path: '/posts/add',
            name: 'AddPost',
            component: AddPost,
            meta: {
                title: 'Add New Post'
            }
        }, {
            path: '/posts/:id',
            name: 'EditPost',
            component: AddPost,
            meta: {
                title: 'Edit Post'
            }
        }, {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: GuestGuard,
            meta: {
                title: 'Login'
            }
        }, {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            beforeEnter: AuthGuard,
            meta: {
                title: 'Dashboard'
            }
        }
    ],
    mode: 'history'
})

routes.beforeEach((to, from, next) => {
    if (Storage.get('token') && Storage.get('user')) {
        Store.commit('AuthStore/SETUSER', Storage.getJSON('user'))
    } else {
        Store.commit('AuthStore/UNSETUSER')
    }
    document.title = to.meta.title ? to.meta.title : 'Untitled'
    next()
})

export default routes
