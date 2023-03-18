import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import NotFound from '../components/NotFound'
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
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'not-found',
        component: NotFound
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;