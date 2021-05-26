import * as actionTypes from "../types";

export const cartReduser = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const getHash = (a) => a.id;
      const seen = new Set();
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload].filter((candidate) => {
          const hash = getHash(candidate);
          if (seen.has(hash)) return false;
          seen.add(hash);
          return true;
        }),
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (obj) => obj.id !== action.payload.id
        ),
      };

    case actionTypes.RESET_CART:
      return {
        cartItems: [],
      };

    case actionTypes.INCREASE_QUALITY:
      return {
        cartItems: state.cartItems.map((obj) => {
          if (obj.id === action.payload.id) {
            return (obj = {
              ...obj,
              qty: obj.qty < 10 ? obj.qty + 1 : (obj.qty = 10),
            });
          } else {
            return obj;
          }
        }),
      };

    case actionTypes.DICREASE_QUALITY:
      return {
        cartItems: state.cartItems.map((obj) => {
          if (obj.id === action.payload.id) {
            return (obj = {
              ...obj,
              qty: obj.qty === 1 ? (obj.qty = 1) : obj.qty - 1,
              url: obj.url,
            });
          } else {
            return obj;
          }
        }),
      };

    default:
      return state;
  }
};
