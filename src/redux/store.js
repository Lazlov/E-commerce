import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReduser } from "./redusers/cartReduser";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const reduser = combineReducers({
  cart: cartReduser,
});

const persistedState = loadFromLocalStorage();

const store = createStore(reduser, persistedState, composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
