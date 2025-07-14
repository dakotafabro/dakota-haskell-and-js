export const MESSAGES = (transitsArr) => {
  return new Set(transitsArr.map((transit) => transit.vibe));
};
