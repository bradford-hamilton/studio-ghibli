<template>
  <div id="movies-div">
    <section id="header">
      <h1>Studio Ghibli</h1>
    </section>
    <article id="intructions">
      <p>Welcome to Studio Ghibly's </p>
    </article>
    <section id="api-section">
      <form>
        <select v-model="selected" @change="onChangeHandler($event)">
          <option disabled value="Select a Movie To Start" :value="films.value">Select a Movie To Start</option>
          <option v-for="film in films" id="drop-down">{{ film.title }}</option>
        </select>
      </form>
      <img :src="currentFilmPosterUrl" @click="goToMovieShow" alt="Sorry no poster for this movie!" />
    </section>
  </div>
  <!-- built files will be auto injected -->
</template>

<script>
import API from '../lib/ghibliAPI';

const api = new API();

export default {
  mounted() {
    this.getAllFilms();
    setTimeout(() => {
      this.getEachFilmsData();
    }, 1000);
  },
  methods: {
    getAllFilms() {
      api.getFilms()
        .then((results) => {
          this.films = results.data;
          this.films.forEach((film, i) => {
            this.mockFilmDatabase[i] = film.title;
          });
        });
    },
    getEachFilmsData() {
      for (let i = 0; i < this.films.length; i += 1) {
        api.getMovie(this.films[i].title)
          .then((results) => {
            let image = `${this.posterUrl}${results.data.results[0].poster_path}`;

            if (!results.data.results[0].poster_path) {
              image = 'https://www.purelypoultry.com/images/georgia-giant-bobwhite-quail.jpg';
            }

            this.filmPosters[this.films[i].title] = image;
            return null;
          });
      }
    },
    onChangeHandler(e) {
      this.selected = e.target.value;

      Object.keys(this.filmPosters)
        .forEach((key) => {
          if (key === this.selected) this.currentFilmPosterUrl = this.filmPosters[key];
        });
    },
    goToMovieShow() {
      const index = this.getKeyByValue(this.mockFilmDatabase, this.selected);

      this.$router.push({ name: 'MoviesShow', params: { id: index } });
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    },
  },
  data() {
    return {
      selected: 'Select a Movie To Start',
      films: [],
      posterUrl: 'http://image.tmdb.org/t/p/w342',
      filmPosters: {},
      currentFilmPosterUrl: '',
      mockFilmDatabase: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

select {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
