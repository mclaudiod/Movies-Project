const API = "https://api.themoviedb.org/3";

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDkyN2ViZDgzMDM5NTM4N2YwZjgzZDk0MWNiMGEyNCIsInN1YiI6IjY1M2MxMjVmMGZiMTdmMDEwMDk2NDM2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IR9u1yQFExrxETsy7yKCn7ycW1d58sjDvNHnRVDGbY4",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
};