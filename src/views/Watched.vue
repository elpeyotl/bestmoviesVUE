<template>
  <div>
    <v-jumbotron heading="Watched movies" text="All watched movies are listed here"/>

    <section>
      <div class="container">
        <v-movie-table :movies="seenList"/>
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
    seenList() {
      return this.$store.state.movieSeenlist;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
</style>