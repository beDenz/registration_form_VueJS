import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        newUser: {
            login: null,
            email: null,
            password: null,
            firstName: null,
            lastName: null,
            country: null,
            city: null,
            birthday: null,
            zipCode: null
        }
    },
    actions: {},
    mutations: {
        setState: function (state, { name, value }) {
            state.newUser = {
                ...state.newUser,
                [name]: value
            }
        }
    },
    getters: {
        getNewUser: state => state.newUser
    }
})