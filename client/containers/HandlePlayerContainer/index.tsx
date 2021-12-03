import React, { FC } from "react";

import Player from "components/Player";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface HandlePlayerContainerPropsInterface {}

const HandlePlayerContainer: FC<HandlePlayerContainerPropsInterface> = ({}) => {
  const { pause, active: activeTrack } = useTypedSelector(
    (state) => state.player
  );

  console.log("activeTrack -> ", activeTrack);

  return (
    <Player
      onPlay={() => {}}
      track={activeTrack}
      active={pause}
      onChangeProgress={() => {}}
      onChangeVolume={() => {}}
    />
  );
};

export default HandlePlayerContainer;
