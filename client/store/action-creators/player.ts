import { PlayerActionType, PlayerActionTypes } from "types/Player";
import { ITrack } from "types/Track";

export const playTrack = (): PlayerActionType => ({
  type: PlayerActionTypes.PLAY,
});

export const pauseTrack = (): PlayerActionType => ({
  type: PlayerActionTypes.PAUSE,
});

export const setDuration = (payload: number): PlayerActionType => ({
  type: PlayerActionTypes.SET_DURATION,
  payload,
});

export const setActive = (track: ITrack): PlayerActionType => ({
  type: PlayerActionTypes.SET_ACTIVE,
  payload: track,
});

export const setVolume = (payload: number): PlayerActionType => ({
  type: PlayerActionTypes.SET_VOLUME,
  payload,
});

export const setCurrentTime = (payload: number): PlayerActionType => ({
  type: PlayerActionTypes.SET_CURRENT_TIME,
  payload,
});
