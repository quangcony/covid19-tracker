import axios from "axios";

const BASE_URL_CORONAVIRUS =
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api";

const coronavirus_options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  },
};

export const coronaVirusApi = async (url) => {
  const { data } = await axios.get(
    `${BASE_URL_CORONAVIRUS}/${url}`,
    coronavirus_options
  );
  return data;
};

const BASE_URL = "https://covid-193.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url, params) => {
  options.params = params;
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
