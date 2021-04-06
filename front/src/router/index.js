import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'
import Panier from '../views/Panier.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },


]

const router = new VueRouter({
  routes,
})

export default router;
