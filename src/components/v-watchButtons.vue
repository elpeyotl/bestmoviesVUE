<template>
  <div>
    <button
      type="button"
      :class="{active: isInWatchlist}"
      class="btn btn-outline-danger m-1"
      @click="handleMovieListing('movieWatchlist')"
    >
      <i class="far fa-heart"></i>
    </button>
    <button
      type="button"
      class="btn btn-outline-info m-1"
      :class="{active: isInSeenlist}"
      @click="handleMovieListing('movieSeenlist')"
    >
      <i class="far fa-eye"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  methods: {
    handleMovieListing(list) {
      const payload = {
        data: this.movie,
        list: list
      };
      if (list === "movieWatchlist") {
        if (!this.isInWatchlist) {
          this.$store.commit("addMovieToList", payload);
          this.$store.commit("showAlert", "Movie added");
        } else {
          this.$store.commit("removeMovieFromList", payload);
          this.$store.commit("showAlert", "Movie removed");
        }
      } else if (list === "movieSeenlist") {
        if (!this.isInSeenlist) {
          this.$store.commit("addMovieToList", payload);
          this.$store.commit("showAlert", "Movie added");
        } else {
          this.$store.commit("removeMovieFromList", payload);
          this.$store.commit("showAlert", "Movie removed");
        }
      }
    }
  },
  computed: {
    isInWatchlist() {
      const result = this.$store.state.movieWatchlist.results.filter(
        watchListMovie => this.movie.id === watchListMovie.id
      );
      return result.length != 0 ? true : false;
    },
    isInSeenlist() {
      const result = this.$store.state.movieSeenlist.results.filter(
        seenListMovie => this.movie.id === seenListMovie.id
      );
      return result.length != 0 ? true : false;
    }
  }
};
</script>