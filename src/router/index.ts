import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Cockpit/Index.vue') as any,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
