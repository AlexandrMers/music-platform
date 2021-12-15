import React, { FC } from "react";

import { Card, Grid, IconButton, Typography } from "@material-ui/core";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";

import { ITrack } from "types/Track";

import { useTypedSelector } from "hooks/useTypedSelector";

import { formatTime } from "../../Player/helpers";

import styles from "./style.module.scss";

interface TrackItemPropsInterface {
  active?: boolean;
  track: ITrack;
  onClickTitle: (trackId: string) => void;
  onClickPlay: (track: ITrack) => void;
}

const TrackItem: FC<TrackItemPropsInterface> = ({
  track,
  onClickTitle,
  onClickPlay,
}) => {
  const {
    active: activeTrack,
    pause,
    currentTime,
    duration,
  } = useTypedSelector((state) => state.player);

  const handleClick = () => {
    onClickTitle(track.id);
  };

  const handleClickPlay = () => {
    onClickPlay(track);
  };

  const isActive = activeTrack?.id === track.id;
  const isActiveAndPlay = isActive && !pause;

  return (
    <Card className={styles.TrackItem}>
      <Grid container alignItems="center">
        <IconButton
          className={styles.TrackItem__Button}
          onClick={handleClickPlay}
        >
          {isActiveAndPlay ? <Pause /> : <PlayArrow />}
        </IconButton>
        <img
          className={styles.TrackItem__Picture}
          src={track.picture}
          alt={track.name}
        />
        <Grid className={styles.TrackItem__Information}>
          <Typography
            noWrap
            className={styles.TrackItem__Name}
            onClick={handleClick}
            variant="h6"
          >
            {track.name}
          </Typography>

          <Typography
            variant="subtitle2"
            gutterBottom
            component="p"
            color="tan"
          >
            {track.artist}
          </Typography>

          {isActive && (
            <div>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          )}
        </Grid>
        <IconButton className={styles.TrackItem__DeleteButton}>
          <Delete />
        </IconButton>
      </Grid>
    </Card>
  );
};

export default TrackItem;
