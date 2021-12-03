import React, { FC } from "react";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";

import cn from "classnames";

import TrackProgress from "components/TrackProgress";

import styles from "./style.module.scss";

import { ITrack } from "types/Track";

interface PlayerPropsInterface {
  active?: boolean;
  track?: ITrack;

  onChangeProgress: () => void;
  onChangeVolume: () => void;
  onPlay: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Player: FC<PlayerPropsInterface> = ({
  track = null,
  active = false,

  onPlay,
  onChangeProgress,
  onChangeVolume,
}) => {
  return (
    <div className={styles.Player}>
      <IconButton onClick={onPlay}>
        {!active ? <PlayArrow color={"action"} /> : <Pause color={"action"} />}
      </IconButton>

      <Grid className={styles.Player__Information}>
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
        <TrackProgress
          left={0}
          right={100}
          onChange={() => onChangeProgress()}
        />
      </Box>

      <Box
        className={cn(
          styles.Player__ProgressTrack,
          styles.Player__ProgressTrack_mlAuto
        )}
      >
        <VolumeUp />

        <TrackProgress left={0} right={100} onChange={() => onChangeVolume()} />
      </Box>
    </div>
  );
};

export default Player;
