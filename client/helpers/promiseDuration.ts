export const promisifyDuration = (duration = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
