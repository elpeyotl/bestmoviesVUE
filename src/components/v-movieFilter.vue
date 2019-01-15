<template>
  <select class="custom-select custom-select-lg mb-3">
    <option
      :selected="selected.id === option.id"
      v-for="(option, index) in options"
      :key="index"
      :value="option"
      @click="updateMovies(option)"
    >{{option.name}}</option>
  </select>
</template>

<script>
import http from "@/services/httpService";

var defaultgenre = {
  name: "Best rated movies",
  id: "/movie/top_rated"
};

export default {
  data: () => {
    return {
      placeholder: [{ name: "Best rated movies", id: "/movie/top_rated" }]
    };
  },
  methods: {
    async getData() {

      console.log('test')
      const { data: genres } = await http.get("/genre/movie/list");
      const options = [...this.placeholder, ...genres.genres];
      this.$store.commit("activeGenre", defaultgenre);
      this.$store.commit("storeGenres", options);
      const request = {
            url: "/movie/top_rated",
            initialize: false
          };
      this.$store.commit("updateMovieFilter", request);

    },
    updateMovies(option) {
      if (this.$store.state.activeGenre.id != option.id) {
        this.$store.commit("activeGenre", option);
        if (Number.isInteger(option.id)) {
          const request = {
            url: "/discover/movie",
            name: option.name,
            params: {
              with_genres: option.id,
              sort_by: "vote_average.desc",
              include_adult: false
            }
          };
          this.$store.commit("updateMovieFilter", request);
        } else {
          const request = {
            url: option.id
          };
          this.$store.commit("activeGenre", defaultgenre);
          this.$store.commit("updateMovieFilter", request);
        }
      }
    }
  },
  computed: {
    options() {
      return this.$store.state.moviesGenres;
    },
    selected() {
      return this.$store.state.activeGenre;
    }
  },
  watch: {
    selected: function(val) {
      this.updateMovies(val);
    }
  },
  created: function() {
    if (this.$store.state.movieFilter.initialize === true) {
      console.log('tet')
      this.getData();
    }
  }
};
</script>



<style scoped lang="scss">
</style>
