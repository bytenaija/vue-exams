import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'Home'
    },
    {
        path: '/:name',
        component: DetailView,
        name: 'Detail'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;