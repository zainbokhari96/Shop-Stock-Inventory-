import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dish: [],
    dishFiber: [],
    receivers: [],
    lnb: [],
    accessories: [],
  },
  mutations: {
    addNewDish(state, data) {
      state.dish.push(data);
    },
    deleteDish(state, data) {
      for (let i = 0; i < state.dish.length; i++) {
        if (state.dish[i].category == data) {
          state.dish.splice(i, 1);
        }
      }
    },
    addNewFiber(state, data) {
      state.dishFiber.push(data);
    },
    deleteFiber(state, data) {
      for (let i = 0; i < state.dishFiber.length; i++) {
        if (state.dishFiber[i].category == data) {
          state.dishFiber.splice(i, 1);
        }
      }
    },
    saleDish(state, data) {
      for (let i = 0; i < state.dish.length; i++) {
        if (state.dish[i].category == data.category) {
          state.dish[i].quantity -= data.quantity;
        }
      }
    },
    saleFiber(state, data) {
      for (let i = 0; i < state.dishFiber.length; i++) {
        if (state.dishFiber[i].category == data.category) {
          state.dishFiber[i].quantity -= data.quantity;
        }
      }
    },
    restockDish(state, data) {
      for (let i = 0; i < state.dish.length; i++) {
        if (state.dish[i].category == data.category) {
          state.dish[i].quantity += parseFloat(data.quantity);
        }
      }
    },
    restockDishFiber(state, data) {
      for (let i = 0; i < state.dishFiber.length; i++) {
        if (state.dishFiber[i].category == data.category) {
          state.dishFiber[i].quantity += parseFloat(data.quantity);
        }
      }
    },
    addNewReceivers(state, data) {
      state.receivers.push(data);
    },
    deleteReceivers(state, data) {
      for (let i = 0; i < state.receivers.length; i++) {
        if (state.receivers[i].category == data) {
          state.dish.splice(i, 1);
        }
      }
    },
    saleReceivers(state, data) {
      for (let i = 0; i < state.receivers.length; i++) {
        if (state.receivers[i].category == data.category) {
          state.receivers[i].quantity -= data.quantity;
        }
      }
    },
    restockReceivers(state, data) {
      for (let i = 0; i < state.receivers.length; i++) {
        if (state.receivers[i].category == data.category) {
          state.receivers[i].quantity += parseFloat(data.quantity);
        }
      }
    },
    addNewLnb(state, data) {
      state.lnb.push(data);
    },
    addNewAcessories(state, data) {
      state.accessories.push(data);
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
