<template>
  <b-navbar variant="faded" type="light" class="text-center">
    <g-link to="/info/" class="w-100"><i class="fa fa-info text-dark"></i> Help</g-link>
    <g-link to="/impressum/" class="w-100"> Impressum</g-link>
    <g-link to="/data/" class="w-100"> Datenschutz</g-link>
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