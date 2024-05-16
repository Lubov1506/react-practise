import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export const getAllPosts = async (configParams) => {
  const { data } = await axios.get("posts", {
    params: { limit: 5, ...configParams },
  });
  return data;
};
export const getPostsByQuery = async (configParams) => {
  console.log(configParams);
  const { data } = await axios.get("posts/search", {
    params: {
      limit: 5,
      ...configParams,
    },
  });
  return data;
};
