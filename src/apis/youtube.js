import axios from "axios";
const KEY = "AIzaSyDSZsfLI97L_6Ur2SOggovKA2Q8bCfKHwA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
