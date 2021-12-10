import React, { FC, useEffect } from "react";

import Player from "components/Player";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import { FAKE_TRACKS } from "../../pages/tracks/fakeData";

interface HandlePlayerContainerPropsInterface {}

let audio: HTMLAudioElement;

function formatVolumeWithDecimals(volume: number) {
  return volume / 100;
}

function roundNumber(value: number) {
  return Math.ceil(value);
}

const HandlePlayerContainer: FC<HandlePlayerContainerPropsInterface> = ({}) => {
  const { pause, volume, currentTime, duration } = useTypedSelector(
    (state) => state.player
  );

  const activeTrack = FAKE_TRACKS[0];

  const { playTrack, pauseTrack, setVolume, setCurrentTime, setDuration } =
    useActions();

  // Initialize audio
  useEffect(() => {
    if (!audio && activeTrack) {
      audio = new Audio();
      audio.src = activeTrack.audio;
      audio.onloadedmetadata = () => {
        setDuration(roundNumber(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(roundNumber(audio.currentTime));
      };
    }
  }, [activeTrack]);

  const handlePlay = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueToNumber = Number(e.target.value);
    if (audio) {
      audio.volume = formatVolumeWithDecimals(valueToNumber);
    }
    setVolume(valueToNumber);
  };

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueToNumber = Number(e.target.value);
    if (audio) {
      audio.currentTime = valueToNumber;
    }
    setCurrentTime(valueToNumber);
  };

  return (
    <Player
      onPlay={handlePlay}
      track={activeTrack}
      active={!pause}
      volume={volume}
      currentTime={currentTime}
      duration={duration}
      onChangeProgress={onChangeCurrentTime}
      onChangeVolume={onChangeVolume}
    />
  );
};

export default HandlePlayerContainer;
