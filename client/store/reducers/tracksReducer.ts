import { TrackAction, TrackActionTypes, TrackState } from "types/Track";

const initialState: TrackState = {
  tracks: [],
  loadingTracks: false,
  error: "",
};

export const tracksReducer = (
  state = initialState,
  action: TrackAction
): TrackState => {
  switch (action.type) {
    case TrackActionTypes.LOAD_TRACKS:
      return {
        ...state,
        loadingTracks: true,
        error: "",
      };

    case TrackActionTypes.FETCH_TRACKS:
      return {
        ...state,
        loadingTracks: false,
        tracks: action.payload,
        error: "",
      };
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return {
        ...state,
        loadingTracks: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
