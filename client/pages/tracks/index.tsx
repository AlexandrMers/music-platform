import React from "react";
import { useRouter } from "next/router";

import { Box, Button, Card, Grid } from "@material-ui/core";

import WithNavbarContainer from "containers/WithNavbarContainer";

import TrackList from "components/TrackList";

import { ROUTE_TYPES } from "configs/routePaths";

import styles from "./index.module.scss";

import { ITrack } from "types/Track";

import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

const Tracks = () => {
  const router = useRouter();

  const {
    player: { active: activeTrack, pause },
    tracks: { tracks, error },
  } = useTypedSelector((state) => ({
    player: state.player,
    tracks: state.tracks,
  }));
  const { playTrack, pauseTrack, setActive } = useActions();

  const handleClick = () => {
    router.push(ROUTE_TYPES.TRACKS_CREATE);
  };

  const handleClickTrack = (trackId: string) => {
    router.push(`${ROUTE_TYPES.TRACKS}/${trackId}`);
  };

  const onClickPlay = (track: ITrack) => {
    if (track.id === activeTrack?.id) {
      if (pause) {
        playTrack();
      } else {
        pauseTrack();
      }
      return;
    }
    setActive(track);
  };

  if (error) {
    return (
      <WithNavbarContainer>
        <h1>{error}</h1>
      </WithNavbarContainer>
    );
  }

  return (
    <WithNavbarContainer>
      <Grid container justifyContent="center">
        <Card className={styles.CreateTrack__MainCard}>
          <Box p={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <h1>Список треков</h1>
              <Button onClick={handleClick}>Загрузить</Button>
            </Grid>
          </Box>

          <TrackList
            tracks={tracks}
            onClickTrack={handleClickTrack}
            onClickPlay={onClickPlay}
          />
        </Card>
      </Grid>
    </WithNavbarContainer>
  );
};

export default Tracks;
