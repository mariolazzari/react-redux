import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
