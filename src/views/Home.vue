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
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/services/httpService";
import vMovieTable from "@/components/v-movieTable";
import vMovieFilter from "@/components/v-movieFilter";
import vJumbotron from "@/components/v-jumbotron";

export default {
  components: { vMovieTable, vMovieFilter, vJumbotron },
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
    filter(newfilter, oldfilter) {
      // Our fancy notification (2).
      console.log(newfilter, oldfilter);
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
      console.log(this.$store.state.movieFilter);
      this.movies = movies;
    }
  },
  created: function() {
    this.getData();
  }
};
</script>

<style lang="scss">
</style>