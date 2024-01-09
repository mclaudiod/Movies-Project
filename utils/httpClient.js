const API_URL = "https://api.themoviedb.org/3";
const API_AUTH = `Bearer ${import.meta.env.VITE_API_AUTH}`;

export const get = (path) => {
  return fetch(API_URL + path, {
    headers: {
      Authorization: API_AUTH,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
};