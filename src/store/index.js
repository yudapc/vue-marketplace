import Vue from "vue";
import Vuex from "vuex";
import cartActions from './actions/cart';
import cartMutations from './mutations/cart';
import cartGetters from './getters/cart';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

// initial state
const state = {
  cart: [],
};

const actions = {
  ...cartActions,
};

const mutations = {
  ...cartMutations,
};

const getters = {
  ...cartGetters,
};

// one store for entire application
export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations,
});
