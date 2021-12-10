export const formatTime = (ms: number) => {
  const minutes = Math.ceil(ms / 60);

  if (minutes > 0) {
    const seconds = Math.ceil(ms % 60);
    return `${minutes}:${seconds}`;
  }

  return `${ms}`;
};
