import axios from "axios";

const KEY = `${process.env.REACT_APP_NEWS_API_KEY}`;

export default axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    sortBy: "popularity",
    apiKey: KEY,
  },
});
