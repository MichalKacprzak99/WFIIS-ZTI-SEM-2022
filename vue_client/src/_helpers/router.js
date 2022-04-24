import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import PostsPage from '../posts/PostsPage'
import newPostForm from '../newPostForm/newPostForm'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/posts', component: PostsPage },
    { path: '/add-post', component: newPostForm },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
