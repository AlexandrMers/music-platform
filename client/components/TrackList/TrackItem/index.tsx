import React, { FC } from "react";
import { ITrack } from "types/Track";

interface TrackItemPropsInterface {
  active?: boolean;
  track: ITrack;
}

const TrackItem: FC<TrackItemPropsInterface> = ({ track, active = false }) => {
  return <div>{track.name}</div>;
};

export default TrackItem;
