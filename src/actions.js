export const fetchSome = arg => new Promise((resolve, reject) => {
  setTimeout(() => resolve('some data'), 1000);
});