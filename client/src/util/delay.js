export default (t, v) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(v), t);
  });
};
