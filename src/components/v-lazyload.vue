<template>
  <div class="lazyload">
    <div class="lds-spinner" v-show="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import http from "@/services/httpService";

export default {
  data: () => {
    return {
      loading: false
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let pageNumber = this.$store.state.movies.page;
      pageNumber++;

      const { data: movies } = await http.get(
        this.$store.state.movieFilter.url,
        {
          params: {
            ...this.$store.state.movieFilter.params,
            page: pageNumber
          }
        }
      );
      let newMovieArray = [
        ...this.$store.state.movies.results,
        ...movies.results
      ];
      let storeMovies = this.$store.state.movies;
      storeMovies.results = newMovieArray;
      storeMovies.page = pageNumber;
      this.loading = false;
      this.$store.commit("storeMovies", storeMovies);
    },
    handleScroll() {
        var self = this;
       let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (!self.loading) self.getData();
        }
    }
  },
  created: function() {
    document.addEventListener("scroll",this.handleScroll, false)
  },
  beforeDestroy: function () {
    document.removeEventListener("scroll", this.handleScroll, false);
  }
};
</script>

<style>
.lazyload {
  display: flex;
  justify-content: center;
}

.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-spinner div {
  transform-origin: 32px 32px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 29px;
  width: 5px;
  height: 14px;
  border-radius: 20%;
  background: #cef;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>


