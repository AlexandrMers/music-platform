import { ITrack } from "./Track";

export interface PlayerStateType {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export enum PlayerActionTypes {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  SET_ACTIVE = "SET_ACTIVE",
  SET_DURATION = "SET_DURATION",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  SET_VOLUME = "SET_VOLUME",
}

interface PlayActionInterface {
  type: PlayerActionTypes.PLAY;
}

interface PauseActionInterface {
  type: PlayerActionTypes.PAUSE;
}

interface SetActiveActionInterface {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: ITrack;
}

interface SetDurationActionInterface {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
}

interface SetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
}

interface SetVolumeActionInterface {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
}

export type PlayerActionType =
  | PlayActionInterface
  | PauseActionInterface
  | SetActiveActionInterface
  | SetDurationActionInterface
  | SetCurrentTimeAction
  | SetVolumeActionInterface;
