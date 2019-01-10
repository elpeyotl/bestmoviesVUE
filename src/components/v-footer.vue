<template>
  <footer class="footer bg-dark">
    <div class="container footer-nav">
      <ul class="nav justify-content-center row">
        <li class="nav-item-footer col">
          <router-link class="nav-link-footer" to="/">
            <i class="fas fa-home"></i>
          </router-link>
        </li>
        <li class="nav-item-footer col">
          <router-link class="nav-link-footer" to="/watchlist">
            <i class="fas fa-heart"></i>
            <span
              class="badge badge-info footer-number"
              v-if="movieWatchList > 0"
            >{{movieWatchList}}</span>
          </router-link>
        </li>
        <li class="nav-item-footer col">
          <router-link class="nav-link-footer" to="/watched">
            <i class="far fa-eye"></i>
            <span class="badge badge-info footer-number" v-if="movieSeenList > 0">{{movieSeenList}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>


<script>
export default {
  computed: {
    movieSeenList() {
      return this.$store.state.movieSeenlist.total_results;
    },
    movieWatchList() {
      return this.$store.state.movieWatchlist.total_results;
    }
  }
};
</script>

<style scoped lang="scss">
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  background-color: #f5f5f5;
}

.footer-nav {
  width: 100%;
  max-width: 400px;
}

.nav-item-footer {
  padding-top: 8px;
  text-align: center;
}

.nav-link-footer {
  padding: 0 1rem;
  color: grey;
  font-size: 2rem;

  &:hover {
    color: white;
  }
}

.footer-number {
  font-size: 0.8rem;
}
</style>
