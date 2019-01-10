<template>
  <div>
    <v-jumbotron heading="Watchlist" text="The movies you want to watch are listed here"/>

    <section>
      <div class="container">
        <v-movie-table :movies="watchlist"/>
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
    return {};
  },
  computed: {
    watchlist() {
      return this.$store.state.movieWatchlist;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
</style>