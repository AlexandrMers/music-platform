import { IComment } from "./Comment";

export interface ITrack {
  id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface TrackState {
  loadingTracks: boolean;
  tracks: ITrack[];
  error: string;
}

export enum TrackActionTypes {
  LOAD_TRACKS = "TRACKS/LOAD",
  FETCH_TRACKS = "TRACKS/FETCH",
  FETCH_TRACKS_ERROR = "TRACKS/ERROR",
}

interface LoadTracksAction {
  type: TrackActionTypes.LOAD_TRACKS;
}

interface FetchTracksAction {
  type: TrackActionTypes.FETCH_TRACKS;
  payload: ITrack[];
}

interface FetchTracksErrorAction {
  type: TrackActionTypes.FETCH_TRACKS_ERROR;
  payload: string;
}

export type TrackAction =
  | FetchTracksAction
  | FetchTracksErrorAction
  | LoadTracksAction;
