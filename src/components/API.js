import axios from "axios";

export const options = {
  method: "GET",
  url: "https://hapi-books.p.rapidapi.com/book/56597885",
  headers: {
    "X-RapidAPI-Key": "e934568380msh95eb8737caac126p1e9d9ejsn1e6e07dc278b",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
