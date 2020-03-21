<template>
        <h2 class="text-light bg-dark p-1 w-25 mx-auto text-center">{{ title }}</h2>
        <!-- <h5 class="title is-6 has-text-centered">{{ subtitle }}</h5> -->
</template>

<script>

export default {
  name: 'Title',
  props: ['title', 'subtitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 768px){
  h2 {
    width: 75% !important;
  }
}
</style>