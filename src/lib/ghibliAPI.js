import axios from 'axios';

export default class API {
  constructor() {
    this.GHIBLI_API_URL = 'https://ghibliapi.herokuapp.com/films';
    this.MOVIE_DB_URL = 'https://api.themoviedb.org/3/search/movie?api_key=622adf41b45348d5c282155e5fc75b63&query=';
  }
  getFilms() {
    return axios.get(this.GHIBLI_API_URL)
      .then(res => res);
  }
  getMovie(query) {
    return axios.get(this.MOVIE_DB_URL + query)
      .then(res => res);
  }
}
