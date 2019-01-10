<template>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">{{heading}}</h1>
      <p class="lead text-muted">{{text}}</p>
      <p>
        <a href="#" class="btn btn-primary my-2 m-2">Create account</a>
        <a href="#" class="btn btn-secondary my-2 m-2">Login</a>
      </p>
      <p class="small">You can save your selection by creating an account or login in.</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: String,
    text: String
  }
};
</script>

<style lang="scss">
</style>