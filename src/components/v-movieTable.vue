<template>
  <div>
    <table class="table table-striped table-responsive" v-if="movies.results.length > 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Movie</th>
          <th scope="col">
            <span class="badge badge-primary">Total movies: {{movies.total_results}}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="movie" v-for="(movie, index) in movies.results" :key="movie.id">
          <th scope="row align-middle">{{index + 1}}</th>
          <td class="cursor" @click="movieDetail(movie)">
            <div v-if="movie.backdrop_path">
              <img :src="imageBaseUrl + imageThumb + movie.backdrop_path">
            </div>
            <div v-else>
              <i class="far fa-image mx-auto"></i>
            </div>
          </td>
          <td class="cursor" @click="movieDetail(movie)">
            <p class="lead">
              {{movie.title}}
              <span
                class="badge badge-info float-right m-1"
              >Year {{formatDate(movie.release_date, 'YYYY')}}</span>
              <span class="badge badge-warning float-right m-1">Rating {{movie.vote_average}}</span>
            </p>
            <p>{{movie.overview}}</p>
          </td>
          <td>
            <v-watch-buttons :movie="movie"/>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="alert alert-danger text-center" role="alert">There arent any movies yet...</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/mixins/formatDate";
import vWatchButtons from "@/components/v-watchButtons";

export default {
  components: {
    vWatchButtons
  },
  props: ["movies"],
  mixins: [formatDate],
  data: function() {
    return {
      imageBaseUrl: "http://image.tmdb.org/t/p/",
      imageThumb: "w300"
    };
  },
  methods: {
    movieDetail(movie) {
      this.$router.push({ name: "movies", params: { id: movie.id } });
    }
  }
};
</script>



<style scoped lang="scss">
.cursor {
  &:hover {
    cursor: pointer;
  }
}
</style>
