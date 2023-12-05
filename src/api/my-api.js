import axios from "axios";
const URL = "https://restcountries.com/v3.1";
const fetchApiCall = async (query) => {
  return axios
    .get(`${URL}/currency/${query}`)
    .then((res) => res)
    .catch((er) => er);
};

export default fetchApiCall;
