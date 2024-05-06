export const cutText = (str) => {
  return str.length > 180 ? `${str.slice(0, 180)}...` : str;
};
