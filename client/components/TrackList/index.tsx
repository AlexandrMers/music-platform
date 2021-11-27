import React, { FC } from "react";

import { ITrack } from "types/Track";

import { Box, Grid } from "@material-ui/core";

import TrackItem from "./TrackItem";

interface TrackListPropsInterface {
  tracks: ITrack[];
}

const TrackList: FC<TrackListPropsInterface> = ({ children, tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
