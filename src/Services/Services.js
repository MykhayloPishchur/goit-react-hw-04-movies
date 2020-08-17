import axios from "axios";

export default {
  baseUrl: `https://api.themoviedb.org/3`,
  apiKey: "7f7dc31298592eb2d1fbbfdbcae6939f",

  trandingMovies() {
    return axios.get(
      `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`
    );
  },

  searchByTitle(query) {
    return axios.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
    );
  },
};
