import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'vuex',
  storage: localStorage,
  reducer: state => ({
    movieWatchlist: state.movieWatchlist,
    movieSeenlist: state.movieSeenlist
  })
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {},
    movies: {
      results: []
    },
    movieFilter: { url: '/movie/top_rated', initialize: true },
    movieWatchlist: {
      results: [],
      total_results: 0
    },
    moviesGenres: {},
    activeGenre: {
      initalize: true
    },
    movieSeenlist: {
      results: [],
      total_results: 0
    },
    alertBox: {
      show: false,
      text: null
    }
  },
  mutations: {
    storeMovies (state, payload) {
      this.state.movies = payload
    },
    updateMovieFilter (state, payload) {
      this.state.movieFilter = payload
    },
    addMovieToList (state, payload) {
      /*
      payload {
        data,
        list
      } */
      this.state[payload.list].results.push(payload.data)
      this.state[payload.list].total_results++
    },
    removeMovieFromList (state, payload) {
      /*
      payload {
        data,
        list
      } */
      var index = this.state[payload.list].results.findIndex(
        movie => movie.id === payload.data.id
      )
      if (index > -1) {
        this.state[payload.list].results.splice(index, 1)
        this.state[payload.list].total_results--
      }
    },
    storeGenres (state, genres) {
      this.state.moviesGenres = genres
    },
    activeGenre (state, genre) {
      this.state.activeGenre = genre
    },
    showAlert (state, text) {
      this.state.alertBox.text = text
      this.state.alertBox.show = true
    },
    getConfig (state, payload) {
      this.state.config = payload
    }
  },
  actions: {},
  plugins: [vuexPersist.plugin]
})
