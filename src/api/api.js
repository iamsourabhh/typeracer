import axios from "axios";

export const getRandomTextApi = () => {
  return axios.get("http://www.randomtext.me/api/");
};
