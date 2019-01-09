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
          </router-link>
        </li>
        <li class="nav-item-footer col">
          <router-link class="nav-link-footer" to="/watched">
            <i class="far fa-eye"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>



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
</style>
