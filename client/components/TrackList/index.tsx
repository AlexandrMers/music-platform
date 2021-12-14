import React, { FC } from "react";

import { ITrack } from "types/Track";

import { Box, Grid } from "@material-ui/core";

import TrackItem from "./TrackItem";

interface TrackListPropsInterface {
  tracks: ITrack[];
  onClickTrack: (trackId: string) => void;
  onClickPlay: (track: ITrack) => void;
}

const TrackList: FC<TrackListPropsInterface> = ({
  tracks,
  onClickTrack,
  onClickPlay,
}) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            onClickTitle={onClickTrack}
            onClickPlay={onClickPlay}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
