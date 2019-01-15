<template>
  <div id="app">
    <v-alert/>
    <v-header/>
    <main role="main" class="container">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <v-footer/>
  </div>
</template>

<script>
import vHeader from "@/components/v-header.vue";
import vFooter from "@/components/v-footer.vue";
import vAlert from "@/components/v-alert";
import http from "@/services/httpService";

export default {
  components: {
    vHeader,
    vFooter,
    vAlert
  },
  methods: {
    async getData() {
      const { data: images } = await http.get("configuration");
      console.log(images);
      this.$store.commit("getConfig", images);
    },
  },
  created: function() {
    this.getData();
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

//Transitions
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
