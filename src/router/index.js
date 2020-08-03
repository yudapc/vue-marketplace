import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../views/pages/homepage/Homepage.vue';
import ProductDetail from '../views/pages/product-detail/ProductDetail.vue';
import Page404 from '../views/pages/Page404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/products/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404,
  }
]

const router = new VueRouter({
  routes,
});

export default router;