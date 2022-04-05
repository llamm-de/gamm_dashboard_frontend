import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: null
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchData(state) {
            const response = await fetch(process.env.VUE_APP_API_URL);
            const response_data = await response.json();
            state.commit("setData", response_data.Payload);
        }
    },
    modules: {
    },
    getters: {
        getData: state => state.data
    }
})