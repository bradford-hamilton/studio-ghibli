<template>
  <div id="movies-show">

  </div>
  <!-- built files will be auto injected -->
</template>

<script>
// import API from '../lib/ghibliAPI';

// const api = new API();

export default {
  mounted() {
    this.getAllFilms();
    setTimeout(() => {
      this.getEachFilmsData();
    }, 1000);
  },
  methods: {

  },
  data() {
    return {

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
