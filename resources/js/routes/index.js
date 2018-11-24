import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import ListPost from '../components/Posts/ListPost'
import AddPost from '../components/Posts/AddPost'

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
        }
    ],
    mode: 'history'
})

routes.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'Untitled'
    next()
})

export default routes
