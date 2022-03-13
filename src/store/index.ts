import {createStore} from 'vuex'

const store = createStore<Record<string, never>>({
    state: {}, 
    mutations: {},
    getters: {},
    actions: {},
    modules: {},
})

export { store }