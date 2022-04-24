import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { posts } from './posts.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        authentication,
        posts
    }
});
