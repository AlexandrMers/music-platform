import React, { FC } from "react";
import { ITrack } from "types/Track";
import { Card, Grid, IconButton, Typography } from "@material-ui/core";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";

import styles from "./style.module.scss";

interface TrackItemPropsInterface {
  active?: boolean;
  track: ITrack;
}

const TrackItem: FC<TrackItemPropsInterface> = ({ track, active = false }) => {
  return (
    <Card className={styles.TrackItem}>
      <Grid container alignItems="center">
        <IconButton className={styles.TrackItem__Button}>
          {active ? <Pause /> : <PlayArrow />}
        </IconButton>
        <img
          className={styles.TrackItem__Picture}
          src={track.picture}
          alt={track.name}
        />
        <Grid className={styles.TrackItem__Information} direction="column">
          <Typography variant="h6" className={styles.TrackItem__Name} noWrap>
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

          {active && <div>02:42 / 03:22</div>}
        </Grid>
        <IconButton className={styles.TrackItem__DeleteButton}>
          <Delete />
        </IconButton>
      </Grid>
    </Card>
  );
};

export default TrackItem;
