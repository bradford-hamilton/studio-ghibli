<template>
  <div id="movies-show">
    <h3>{{ movieName }}</h3>
    <img :src="imageUrl" alt="Sorry there is no image for this film :(">
  </div>
  <!-- built files will be auto injected -->
</template>

<script>
import MockDatabase from '../assets/MockDatabase';
import MockFilmPosterObject from '../assets/MockFilmPosterObject';

export default {
  mounted() {

  },
  methods: {

  },
  data() {
    return {
      imageUrl: MockFilmPosterObject[this.$route.params.id],
      movieName: MockDatabase[this.$route.params.id],
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
