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
    reports : []
  },
  mutations: {
    addNewReport(state , data) {
      state.reports.push(data);
    },
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
          this.commit.addNewReport(data);
        }
      }
    },
    saleFiber(state, data) {
      for (let i = 0; i < state.dishFiber.length; i++) {
        if (state.dishFiber[i].category == data.category) {
          state.dishFiber[i].quantity -= data.quantity;
          this.commit.addNewReport(data);
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
          state.receivers.splice(i, 1);
        }
      }
    },
    saleReceivers(state, data) {
      for (let i = 0; i < state.receivers.length; i++) {
        if (state.receivers[i].category == data.category) {
          state.receivers[i].quantity -= data.quantity;
          this.commit.addNewReport(data);
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
    deleteLnb(state, data) {
      for (let i = 0; i < state.lnb.length; i++) {
        if (state.lnb[i].category == data) {
          state.lnb.splice(i, 1);
        }
      }
    },
    saleLnb(state, data) {
      for (let i = 0; i < state.lnb.length; i++) {
        if (state.lnb[i].category == data.category) {
          state.lnb[i].quantity -= data.quantity;
          this.commit.addNewReport(data);
        }
      }
    },
    restockLnb(state, data) {
      for (let i = 0; i < state.lnb.length; i++) {
        if (state.lnb[i].category == data.category) {
          state.lnb[i].quantity += parseFloat(data.quantity);
        }
      }
    },
    addNewAccessories(state, data) {
      state.accessories.push(data);
    },
    deleteAccessories(state, data) {
      for (let i = 0; i < state.accessories.length; i++) {
        if (state.accessories[i].category == data) {
          state.accessories.splice(i, 1);
        }
      }
    },
    saleAccessories(state, data) {
      for (let i = 0; i < state.accessories.length; i++) {
        if (state.accessories[i].category == data.category) {
          state.accessories[i].quantity -= data.quantity;
          this.commit.addNewReport(data);
        }
      }
    },
    restockAccessories(state, data) {
      for (let i = 0; i < state.accessories.length; i++) {
        if (state.accessories[i].category == data.category) {
          state.accessories[i].quantity += parseFloat(data.quantity);
        }
      }
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
