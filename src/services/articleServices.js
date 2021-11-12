// Axios With Authentication
import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
  return axiosWithAuth()
    .get("http://localhost:5000/api/articles")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
