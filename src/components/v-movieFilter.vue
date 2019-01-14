<template>
  <select class="custom-select custom-select-lg mb-3" v-model="selected">
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
      @click="updateMovies(option)"
    >{{option.name}}</option>
  </select>
</template>

<script>
import http from "@/services/httpService";

export default {
  data: () => {
    return {
      options: [{ name: "Best rated movies", id: "/movie/top_rated" }],
      selected: {
        name: "Best rated movies",
        id: "/movie/top_rated"
      }
    };
  },
  methods: {
    async getData() {
      const { data: genres } = await http.get("/genre/movie/list");
      this.options = [...this.options, ...genres.genres];
    },
    updateMovies(option) {
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
        this.$store.commit("updateMovieFilter", request);
      }
    }
  },
  watch: {
    selected: function(val) {
      this.updateMovies(val);
    }
  },
  created: function() {
    this.getData();
  }
};
</script>



<style scoped lang="scss">
</style>
