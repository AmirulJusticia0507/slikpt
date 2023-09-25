import Vue from 'vue';
import Router from 'vue-router';

// Import komponen-komponen yang diperlukan
import Dashboard from './components/Dashboard.vue';
import InputSLIK from './components/InputSLIK.vue';
import Login from './components/Login.vue'; // Halaman login
import Logout from './components/Logout.vue';
import Review from './components/Review.vue';
import UserManagement from './components/UserManagement.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history', // Mode history untuk URL yang bersih
    routes: [{
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/input-slik',
            name: 'InputSLIK',
            component: InputSLIK,
        },
        {
            path: '/review',
            name: 'Review',
            component: Review,
        },
        {
            path: '/user-management',
            name: 'UserManagement',
            component: UserManagement,
        },
        {
            path: '/logout',
            name: 'Logout',
            component: Logout,
        },
        {
            path: '/login', // Rute untuk halaman login
            name: 'Login',
            component: Login,
        },
    ],
});

export default router;