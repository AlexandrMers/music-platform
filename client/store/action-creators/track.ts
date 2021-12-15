import { Dispatch } from "react";
import axios from "axios";

import { TrackAction, TrackActionTypes } from "types/Track";

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/tracks`);
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: e.message,
      });
    }
  };
};
