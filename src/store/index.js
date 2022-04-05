import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: null
    },
    mutations: {
        storeDataFromAPI(state, api_data) {
            state.data = api_data;
        }
    },
    actions: {
    },
    modules: {
    }
})