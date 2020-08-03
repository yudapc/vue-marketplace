import * as types from "../mutation-types";

// actions
const actions = {
  addToCart({ commit }, product) {
    commit(types.ADD_TO_CART, {
      id: product.id,
      masked_id: product.masked_id,
      image: product.image,
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

export default actions;