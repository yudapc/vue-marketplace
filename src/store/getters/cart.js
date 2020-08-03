// getters
const getters = {
  getNumberOfCart: (state) => (state.cart ? state.cart.length : 0),
  cart: (state) => {
    return state.cart;
  },
};


export default getters;