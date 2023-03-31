import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomeComp.vue'
import Login from '../components/LoginComp.vue'
import Board from '../components/BoardComp.vue'
import Card from '../components/CardComp.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Home,
      beforeEnter: requireAuth
    },
    { 
      path: '/login', 
      component: Login 
    },
    { 
      path: '/b/:bid', 
      component: Board,
      beforeEnter: requireAuth,
      children: [{ path: 'c/:cid', component: Card }] 
    },
    { 
      path: '*', 
      component: NotFound 
    }
  ]
})

export default router
