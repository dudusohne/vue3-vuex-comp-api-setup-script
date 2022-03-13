import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore<Record<string, any>>({
    state: {
        count: 0
    }, 
    mutations: {
        increment(state, randomNumber: any) {
            state.count += randomNumber
        },
        decrement(state, randomNumber: any) {
            state.count -= randomNumber
        }
    },
    getters: {},
    actions: {
        increment({commit}) {
            axios('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((response) => {    
                commit('increment', response.data)
            })
        },
        decrement({commit}) {
            axios('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((response) => {    
                commit('decrement', response.data)
            })
        }
    },
    modules: {},
})

export { store }