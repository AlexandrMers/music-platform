function viewSeconds(seconds: number) {
  return seconds < 10 ? "0" + seconds : seconds;
}

function calculateSecondsAfterRoundMinutes(seconds: number) {
  return Math.ceil(seconds % 60);
}

export const formatTime = (seconds: number) => {
  const minutes = Number((seconds / 60).toFixed(2));
  if (minutes < 1) {
    return `0:${viewSeconds(seconds)}`;
  }
  const minutesFloor = Math.floor(minutes);
  const restSecondsAfterMinutes = calculateSecondsAfterRoundMinutes(seconds);
  return `${minutesFloor}:${viewSeconds(restSecondsAfterMinutes)}`;
};
