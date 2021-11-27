import React from "react";
import { useRouter } from "next/router";

import { Box, Button, Card, Grid } from "@material-ui/core";

import WithNavbarContainer from "containers/WithNavbarContainer";

import TrackList from "../../components/TrackList";

import { ROUTE_TYPES } from "configs/routePaths";

import styles from "./index.module.scss";

import { ITrack } from "types/Track";

import { FAKE_TRACKS } from "./fakeData";

const Tracks = () => {
  const router = useRouter();

  const tracks: ITrack[] = FAKE_TRACKS;

  const handleClick = () => {
    router.push(ROUTE_TYPES.TRACKS_CREATE);
  };

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

          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </WithNavbarContainer>
  );
};

export default Tracks;
