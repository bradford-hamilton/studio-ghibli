import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from '@/components/WelcomePage';
import Movies from '@/components/Movies';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
  ],
});
