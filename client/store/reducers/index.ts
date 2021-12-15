import { combineReducers } from "redux";

import { HYDRATE } from "next-redux-wrapper";

import { playerReducer } from "./playerReducer";
import { tracksReducer } from "./tracksReducer";

export const rootReducer = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootReducerType = ReturnType<typeof rootReducer>;
