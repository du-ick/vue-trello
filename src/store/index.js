import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAddBoard: false,

    },
    mutations: {
        SET_IS_ADD_BOARD(state, toggle) {
            state.isAddBoard = toggle
        }
    },
    actions: { //비동기적 코드 정의
        // increment(context) {
        // }
    }

})

export default store