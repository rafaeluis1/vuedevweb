import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        peoples: [
            { name: "Rafael Santos", age: 24, country: "Brasil", gender: "Male" },
            { name: "Isaac da Cunha", age: 42, country: "Brasil", gender: "Male" },
            { name: "Helena Assunção", age: 21, country: "Brasil", gender: "Female" },
            { name: "Bernardo Santos", age: 30, country: "Brasil", gender: "Male" },
            { name: "Amanda Rocha ", age: 32, country: "Alemanha", gender: "Female" },
            { name: "Anthony Mota", age: 79, country: "Estados Unidos", gender: "Male" },
            { name: "Amanda Rodrigues", age: 23, country: "Brasil", gender: "Male" },
            { name: "Otávio Mata", age: 52, country: "Espanha", gender: "Male" }
        ],
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
    actions: {
        submitPeople({ commit }, people) {
            commit('addpeople', people)
        }

    },
    getters: {
        countperson({ peoples }) {
            return peoples.length;
        }

    },
    modules: {}
})