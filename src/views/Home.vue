<template>
  <div>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Best rated movies</h1>
        <p
          class="lead text-muted"
        >Discover best rated movies of all time and add it to your watchlist.</p>
        <p>
          <a href="#" class="btn btn-primary my-2 m-2">Create account</a>
          <a href="#" class="btn btn-secondary my-2 m-2">Login</a>
        </p>
        <p class="small">You can save your selection by creating an account or login in.</p>
      </div>
    </section>

    <section>
      <div class="container">
        <table v-show="movies" class="table table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Movie</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(movie, index) in movies.results" :key="movie.id">
              <th scope="row align-middle">{{index + 1}}</th>
              <td class>
                <img :src="imageBaseUrl + imageThumb + movie.backdrop_path">
              </td>
              <td>
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
                <button type="button" class="btn btn-outline-danger m-1">
                  <i class="far fa-heart"></i>
                </button>
                <button type="button" class="btn btn-outline-info m-1">
                  <i class="far fa-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/services/httpService";
import { formatDate } from "@/mixins/formatDate";

export default {
  mixins: [formatDate],
  data: function() {
    return {
      movies: [],
      imageBaseUrl: "http://image.tmdb.org/t/p/",
      imageThumb: "w300"
    };
  },
  methods: {
    async getData() {
      const { data: movies } = await http.get("/movie/top_rated");
      this.movies = movies;
    }
  },
  computed: {},
  mounted: function() {
    this.getData();
  }
};
</script>