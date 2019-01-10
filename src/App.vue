<template>
  <div id="app">
    <v-alert/>
    <v-header/>
    <main role="main" class="container">
      <router-view/>
    </main>
    <v-footer/>
  </div>
</template>

<script>
import vHeader from "@/components/v-header.vue";
import vFooter from "@/components/v-footer.vue";
import vAlert from "@/components/v-alert";

export default {
  components: {
    vHeader,
    vFooter,
    vAlert
  }
};
</script>

<style lang="scss">
body {
  padding-top: 5rem;
}
.router-link-exact-active {
  color: white !important;
}
main {
  height: 100%;
  margin-bottom: 100px;
}
</style>
