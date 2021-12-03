import { createStore, Store } from "redux";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";

import { reducer, RootReducerType } from "./reducers";

const makeStore: MakeStore<Store<RootReducerType>> = (context: Context) =>
  createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootReducerType>>(makeStore, {
  debug: true,
});
