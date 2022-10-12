import Vue from 'vue';
import VueRouter from 'vue-router';

import LandingView from '../views/LandingView.vue';

Vue.use(VueRouter);

export const router = new VueRouter ({
    mode : 'history',
    routes: [
        {
            path : '/',
            component: LandingView
            
        }

    ]
});