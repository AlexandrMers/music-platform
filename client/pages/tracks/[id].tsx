import React, { FC } from "react";
import { useRouter } from "next/router";

import { Box, Card, Grid, Typography } from "@material-ui/core";

import WithNavbarContainer from "containers/WithNavbarContainer";

import Comments from "components/Comments";
import CommentForm from "components/CommentForm";
import ButtonBack from "components/ButtonBack";

import { ROUTE_TYPES } from "configs/routePaths";

import { FAKE_TRACKS } from "../../libs/fakeData";

interface TrackPropsInterface {}

const Track: FC<TrackPropsInterface> = ({}) => {
  const track = FAKE_TRACKS[0];

  const router = useRouter();

  // TODO - будет использоваться для запроса трека...
  const { id } = router.query;

  const handleBackArrowClick = () => {
    router.push(ROUTE_TYPES.TRACKS);
  };

  return (
    <WithNavbarContainer>
      <ButtonBack onClick={handleBackArrowClick} />

      <Grid container>
        <img src={track.picture} alt={track.name} width={200} height={200} />

        <Card variant="outlined">
          <Box p="25px">
            <Typography variant={"h5"} color={"tan"}>
              Исполнитель - {track.artist}
            </Typography>
            <Typography variant={"h5"} color={"tan"}>
              Название трека - {track.name}
            </Typography>
            <Typography variant={"h5"} color={"tan"}>
              Прослушиваний - {track.listens}
            </Typography>
          </Box>
        </Card>

        <Grid container direction="column">
          <Box marginTop="25px">
            <Typography variant={"h5"}>Текст к треку</Typography>
            <Typography variant={"body2"}>{track.text}</Typography>
          </Box>

          <Grid container direction="column">
            <Typography marginTop="15px" variant="h6">
              Комментарии
            </Typography>

            <CommentForm onSubmit={() => {}} />

            <Comments
              comments={[
                { id: "1", text: "Крутой трек!!", username: "Александр" },
                { id: "2", text: "Крутой трек!! 123", username: "fdsfsdf" },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
    </WithNavbarContainer>
  );
};

export default Track;
