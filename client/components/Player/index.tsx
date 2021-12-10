import React, { FC } from "react";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";

import cn from "classnames";

import TrackProgress from "components/TrackProgress";

import { ITrack } from "types/Track";

import { formatTime } from "./helpers";

import styles from "./style.module.scss";

interface PlayerPropsInterface {
  active?: boolean;
  track?: ITrack;
  volume?: number;
  currentTime?: number;
  duration?: number;

  onChangeProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPlay: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Player: FC<PlayerPropsInterface> = ({
  active = false,
  currentTime = 0,
  duration = 0,
  track = null,
  volume = 80,

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
          {track?.name}
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          component="p"
          color={"black"}
        >
          {track?.artist}
        </Typography>
      </Grid>

      <Box
        className={cn(
          styles.Player__ProgressTrack,
          styles.Player__ProgressTrack_ml50
        )}
      >
        <TrackProgress
          left={currentTime}
          right={duration}
          formatView={formatTime}
          onChange={onChangeProgress}
        />
      </Box>

      <Box
        className={cn(
          styles.Player__ProgressTrack,
          styles.Player__ProgressTrack_mlAuto
        )}
      >
        <VolumeUp />

        <TrackProgress left={volume} right={100} onChange={onChangeVolume} />
      </Box>
    </div>
  );
};

export default Player;
