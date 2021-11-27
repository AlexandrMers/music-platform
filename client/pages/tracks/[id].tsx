import React, { FC, memo } from "react";

import { Box, Card, Typography } from "@material-ui/core";

import WithNavbarContainer from "containers/WithNavbarContainer";

interface TrackPropsInterface {}

const Track: FC<TrackPropsInterface> = (props) => {
  return (
    <WithNavbarContainer>
      <Card>
        <Box p={3}>
          <Typography>Страница трека</Typography>
        </Box>
      </Card>
    </WithNavbarContainer>
  );
};

export default memo(Track);
