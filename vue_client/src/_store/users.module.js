import { userService } from '../_services';

export const users = {
    namespaced: true,
    state: {
        all: {
        }
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getAll()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        },
        add({ commit }, {firstName, lastName, password, email}) {
            commit('getAllRequest');

            userService.add(firstName, lastName, password, email)
                .then(
                    user => commit('addNewSuccess', user),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        },
        addNewSuccess(state, user) {
            if (state.all.hasOwnProperty("items")){
                state.all.items.push(user);
            } else {
                state.all = { items: [user] };
            }
        }
    }
}
