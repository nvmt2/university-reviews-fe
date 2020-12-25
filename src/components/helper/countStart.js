export const countStart = (like, unlike) => {
  let c = like / unlike;
  if (isNaN(c)) return 5;
  switch (true) {
    case c < 1:
      return 2;
    case c <= 1.2:
      return 3;
    case c <= 2:
      return 3;
    default:
      return 5;
  }
};
