import React, { FC } from "react";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";

import cn from "classnames";

import TrackProgress from "components/TrackProgress";

import styles from "./style.module.scss";

import { FAKE_TRACKS } from "pages/tracks/fakeData";

interface PlayerPropsInterface {}

const Player: FC<PlayerPropsInterface> = () => {
  const active = false;
  const track = FAKE_TRACKS[0];

  return (
    <div className={styles.Player}>
      <IconButton>
        {!active ? <PlayArrow color={"action"} /> : <Pause color={"action"} />}
      </IconButton>

      <Grid className={styles.Player__Information} direction="column">
        <Typography noWrap className={styles.TrackItem__Name} variant="h6">
          {track.name}
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          component="p"
          color={"black"}
        >
          {track.artist}
        </Typography>
      </Grid>

      <Box
        className={cn(
          styles.Player__ProgressTrack,
          styles.Player__ProgressTrack_ml50
        )}
      >
        <TrackProgress left={0} right={100} onChange={() => {}} />
      </Box>

      <Box
        className={cn(
          styles.Player__ProgressTrack,
          styles.Player__ProgressTrack_mlAuto
        )}
      >
        <VolumeUp />

        <TrackProgress left={0} right={100} onChange={() => {}} />
      </Box>
    </div>
  );
};

export default Player;
