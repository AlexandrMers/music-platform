import { applyMiddleware, createStore, Store } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import thunk from "redux-thunk";

import { reducer, RootReducerType } from "./reducers";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<Store<RootReducerType>> = () =>
  createStore(reducer, bindMiddleware([thunk]));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootReducerType>>(makeStore, {
  debug: true,
});
