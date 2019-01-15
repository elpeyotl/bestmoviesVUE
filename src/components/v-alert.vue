<template>
  <div
    :class="{ 'alert-custom--active': $store.state.alertBox.show}"
    class="alert alert-custom--badge alert-primary text-center"
    role="alert"
  >{{$store.state.alertBox.text}}</div>
</template>

<script>
export default {
  computed: {
    alert() {
      return this.$store.state.alertBox.show;
    }
  },
  watch: {
    alert(newfilter, oldfilter) {
      if (alert) {
        var self = this;
        setTimeout(function() {
          self.$store.state.alertBox.show = false;
          self.$store.state.alertBox.text = null;
        }, 1000);
      }
    }
  }
};
</script>



<style lang="scss" scoped>
.alert-custom {
  &--badge {
    position: fixed;
    width: 100%;
    max-width: 300px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    opacity: 0;
    transition: all ease-in-out 0.5s;
  }

  &--active {
    opacity: 1;
    top: 100px;
  }
}
</style>