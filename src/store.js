import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'vuex',
  storage: localStorage,
  reducer: state => ({ movies: state.movies, movieWatchlist: state.movieWatchlist, movieSeenlist: state.movieSeenlist })
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: {
      results: []
    },
    movieFilter: { url: '/movie/top_rated' },
    movieWatchlist: {
      results: [],
      total_results: 0
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
    showAlert (state, text) {
      this.state.alertBox.text = text
      this.state.alertBox.show = true
    }
  },
  actions: {},
  plugins: [vuexPersist.plugin]
})
