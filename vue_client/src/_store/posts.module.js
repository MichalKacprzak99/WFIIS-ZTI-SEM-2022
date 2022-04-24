import { postService } from '../_services';

export const posts = {
    namespaced: true,
    state: {
        all: {
        }
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            postService.getAll()
                .then(
                    posts => commit('getAllSuccess', posts),
                    error => commit('getAllFailure', error)
                );
        },
        add({ commit }, {content}) {
            commit('getAllRequest');

            postService.add(content)
                .then(
                    post => commit('addNewSuccess', post),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, posts) {
            state.all = { items: posts };
        },
        getAllFailure(state, error) {
            state.all = { error };
        },
        addNewSuccess(state, post) {
            if (state.all.hasOwnProperty("items")){
                state.all.items.push(post);
            } else {
                state.all = { items: [post] };
            }
        }
    }
}
