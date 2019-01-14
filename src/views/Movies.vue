<template>
  <div>
    <v-jumbotron
      :heading="movie.title"
      text="Discover best rated movies of all time and add it to your watchlist."
    />
    <div class="container">
      <div class="card text-centered" style="width: 100%">
        <img
          class="card-img-top"
          :alt="movie.title"
          :src="`${$store.state.config.images.secure_base_url}${$store.state.config.images.backdrop_sizes[2]}${movie.backdrop_path}`"
        >
        <div class="card-body text-center">
          <span class="badge badge-warning m-1">Rating {{movie.vote_average}}</span>
          <span class="badge badge-info m-1">Year {{formatDate(movie.release_date, 'YYYY')}}</span>
          <span v-for="genre in genres" :key="genre" class="badge badge-danger m-1">{{genre}}</span>

          <br>
          <br>
          <h5 class="card-title">{{movie.title}}</h5>
          <p class="card-text">{{movie.overview}}</p>
          <v-watch-buttons :movie="movie" class="text-center"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vJumbotron from "@/components/v-jumbotron";
import { formatDate } from "@/mixins/formatDate";

import vWatchButtons from "@/components/v-watchButtons";

export default {
  components: { vWatchButtons, vJumbotron },
  mixins: [formatDate],

  data: () => {
    return {
      movie: ""
    };
  },
  computed: {
    genres() {
      return result;
    }
  },
  mounted: function() {
    this.movie = this.$route.params.data;
  }
};
</script>
