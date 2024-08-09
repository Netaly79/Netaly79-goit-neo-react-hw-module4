import axios from "axios";

const ACCESS_KEY = "zIQQTdIjrJUxcEY7psOMeet2VmnfoWQ6haDQnRTfDqg";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (searchStr, page = 1) => {
  return await axios.get(
    `/search/photos?query=${searchStr}&client_id=${ACCESS_KEY}&page=${page}&per_page=20`
  );
};
