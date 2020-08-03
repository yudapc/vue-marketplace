import * as types from "../mutation-types";

// mutations / reducer
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
        record.quantity = record.quantity + 1;
      }
    }
  },
  [types.UPDATE_TO_CART](state, { id, quantity }) {
    const record = state.cart.find((p) => p.id === id);
    if (record) {
      record.quantity = quantity;
    }
  },
  [types.DELETE_TO_CART](state, { id }) {
    const newCart = state.cart.filter((item) => item.id !== id);
    state.cart = newCart;
  },
};

export default mutations;