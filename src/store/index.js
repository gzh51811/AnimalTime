import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import state from './state';
Vue.use(Vuex);
const store = new Store({
    state,
    getters: {
        llik(state) {
            return state.lists.filter(Liststop => Liststop.id)
        }
    }
})
export default store;