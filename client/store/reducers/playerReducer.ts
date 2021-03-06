import {
  PlayerActionType,
  PlayerActionTypes,
  PlayerStateType,
} from "types/Player";

const initialState: PlayerStateType = {
  active: null,
  currentTime: 0,
  duration: 0,
  pause: true,
  volume: 70,
};

export const playerReducer = (
  state = initialState,
  action: PlayerActionType
): PlayerStateType => {
  switch (action.type) {
    case PlayerActionTypes.PAUSE:
      return {
        ...state,
        pause: true,
      };

    case PlayerActionTypes.PLAY:
      return {
        ...state,
        pause: false,
      };

    case PlayerActionTypes.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
        duration: 0,
        currentTime: 0,
      };

    case PlayerActionTypes.SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      };

    case PlayerActionTypes.SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };

    case PlayerActionTypes.SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload,
      };

    default:
      return state;
  }
};
