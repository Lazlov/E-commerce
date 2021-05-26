import * as actionTypes from "./types";

export const addToCart = (id, data) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id: id,
    name: data.name,
    price: data.price,
    qty: data.qty,
    url: data.url,
  },
});

export const remove = (id) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id: id,
  },
});

export const increase = (id) => ({
  type: actionTypes.INCREASE_QUALITY,
  payload: {
    id: id,
  },
});

export const decrease = (id) => ({
  type: actionTypes.DICREASE_QUALITY,
  payload: {
    id: id,
  },
});

export const reset = () => ({
  type: actionTypes.RESET_CART,
});
