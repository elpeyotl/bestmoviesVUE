<template>
  <div>
    <v-jumbotron
      heading="Best rated Movies"
      text="Discover best rated movies of all time and add it to your watchlist."
    />
    <v-movie-filter/>

    <section>
      <div class="container">
        <v-movie-table :movies="movies"/>
        <v-layzload/>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/services/httpService";
import vMovieTable from "@/components/v-movieTable";
import vMovieFilter from "@/components/v-movieFilter";
import vJumbotron from "@/components/v-jumbotron";
import vLayzload from "@/components/v-lazyload";

export default {
  components: { vMovieTable, vMovieFilter, vJumbotron, vLayzload },
  data: () => {
    return {
      movies: {
        results: []
      }
    };
  },
  computed: {
    filter() {
      return this.$store.state.movieFilter;
    }
  },
  watch: {
    filter() {
      this.getData();
    }
  },
  methods: {
    async getData() {
      const { data: movies } = await http.get(
        this.$store.state.movieFilter.url,
        {
          params: {
            ...this.$store.state.movieFilter.params
          }
        }
      );
      this.movies = movies;
      this.$store.commit("storeMovies", this.movies);
    }
  },
  created: function() {
    if (this.$store.state.movies.results.length === 0) {
      this.getData();
    } else {
      this.movies = this.$store.state.movies;
    }
  }
};
</script>

<style lang="scss">
</style>