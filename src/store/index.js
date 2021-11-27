import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        peoples: [{ name: "Rafael Santos", age: 24, country: "BRasil", gender: "Male" }],
    },
    mutations: {
        addpeople(state, people) {
            state.peoples.push({
                name: people.name,
                age: people.age,
                country: people.country,
                gender: people.gender
            })
        }
    },
    actions: {},
    modules: {}
})