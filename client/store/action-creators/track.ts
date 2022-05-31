import { Dispatch } from "react";

import ApiCore from "apiCore";

import { TrackAction, TrackActionTypes } from "types/Track";

import { promisifyDuration } from "helpers/promiseDuration";

export const fetchTracks = (count?: number, offset?: number) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      // start loading tracks
      dispatch({
        type: TrackActionTypes.LOAD_TRACKS,
      });

      await promisifyDuration(3000);
      const data = await ApiCore.fetchTracks(count, offset);

      // set received tracks in store
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: e.message,
      });
    }
  };
};
