<template>
  <b-navbar variant="faded" type="light">
      <g-link to="/"><img src="../assets/images/logo.png" alt="Logo Support your local"></g-link>
    <b-navbar-nav class="ml-auto pr-5">
        <g-link class="px-3" to="/cafes/">Deine Lieblingscafés</g-link>
        <g-link class="px-3" to="/info/">Informationen</g-link>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 100px;
}
nav {
  /* border-bottom: 1px solid lightseagreen; */
}
</style>