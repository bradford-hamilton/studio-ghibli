import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from '@/components/WelcomePage';
import Movies from '@/components/Movies';
import MoviesShow from '@/components/MoviesShow';

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
    {
      path: '/movies/:id',
      name: 'MoviesShow',
      component: MoviesShow,
    },
  ],
});
