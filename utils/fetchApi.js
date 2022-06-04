import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "3210267226msh0230a27d9fb0af2p1e4ee2jsn86f016bf3f6e",
    },
  });

  return data;
};
