import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation-types";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// mutations
const mutations = {
  [types.ADD_TO_CART](state, { id, name, price, quantity }) {
    const record = state.cart.find((p) => p.id === id);
    if (!record) {
      state.cart.push({
        id,
        name,
        price,
        quantity,
      });
    } else {
      if (quantity) {
        record.quantity = record.quantity + quantity;
      } else {
        record.quantity++;
      }
    }
  },
  [types.UPDATE_TO_CART](state, { id, quantity }) {
    const record = state.cart.find((p) => p.id === id);
    if (!record) {
      record.quantity = quantity;
    }
  },
  [types.DELETE_TO_CART](state, { id }) {
    const newCart = state.cart.filter((item) => item.id !== id);
    state.cart = newCart;
  },
};

// initial state
const state = {
  cart: [],
};

// getters
const getters = {
  getNumberOfCart: (state) => (state.cart ? state.cart.length : 0),
  cart: (state) => {
    return state.cart;
  },
};

// actions
const actions = {
  addToCart({ commit }, product) {
    commit(types.ADD_TO_CART, {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity
    });
  },
  updateToCart({ commit }, product) {
    commit(types.UPDATE_TO_CART, {
      id: product.id,
      quantity: product.quantity
    });
  },
  deleteToCart({ commit }, product) {
    commit(types.DELETE_TO_CART, {
      id: product.id,
    });
  },
};

// one store for entire application
export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations,
});
