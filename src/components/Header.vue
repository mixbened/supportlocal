<template>
  <b-navbar variant="faded" type="light" class="mx-5">
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
@media (max-width: 768px){
  nav.mx-5 {
    margin: 0 !important;
  }
  ul.pr-5 {
    padding: 0 !important;
  }
  img {
    max-width: 50px;
  }
  ul > a {
    font-size: 0.8em !important;
  }
}
</style>