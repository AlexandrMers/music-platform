import React, { FC } from "react";

import WithNavbarContainer from "containers/WithNavbarContainer";

interface CreateTrackPropsInterface {}

const CreateTrack: FC<CreateTrackPropsInterface> = (props) => {
  return (
    <WithNavbarContainer>
      <h1>Загрузка трека</h1>
    </WithNavbarContainer>
  );
};

export default CreateTrack;