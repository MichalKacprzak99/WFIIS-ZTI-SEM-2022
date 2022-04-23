import Vue from 'vue';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

import footer from './components/Footer'
import navbar from './components/NavBar'

Vue.component('myFooter', footer)
Vue.component('myNavbar', navbar)
// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();
Vue.config.productionTip = false

import "./assets/css/index.css"

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});