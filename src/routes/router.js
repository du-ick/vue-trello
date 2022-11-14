import Vue from 'vue';
import VueRouter from 'vue-router';

import LandingView from '../views/LandingView.vue';
import LoginComp from '../components/user/LoginComp.vue';
import BoardComp from '../components/contents/BoardComp.vue'
import CardComp from '../components/contents/CardComp.vue'
import HomeComp from '../components/contents/HomeComp.vue'
import errorComp from '../views/util/ErrorComp.vue'

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
    const isAuth = localStorage.getItem('token')
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`

    isAuth ? next() : next(loginPath)
}

export const router = new VueRouter ({
    mode : 'history',
    routes: [
        {
            path : '/',
            // redirect: '/home'
            component: LandingView,
            beforeEnter: requireAuth 
        },
        {
            path : '/home',
            component: HomeComp
        },
        {
            path : '/login',
            component: LoginComp
        },
        {
            path : '/board/:boardId',
            component: BoardComp,
            beforeEnter: requireAuth,

            children : [
                {
                    path : 'card/:cardId',
                    component: CardComp,
                    beforeEnter: requireAuth 

                    
                }
            ] //중첩 라우팅
        },
        {
            path : '*',
            component : errorComp
        }

    ]
});
