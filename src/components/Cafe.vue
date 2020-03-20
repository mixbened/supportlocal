<template>
    <section>
      <b-card
            :title="title"
            :img-src="imageUrl"
            img-alt="Article Image"
            img-top
            tag="article"
            class="mb-2"
        >
            <p>{{ description.substring(0,100) }}...</p>

            <g-link :to="path"><b-button block variant="dark">Kaffee trinken</b-button></g-link>
        </b-card>
    </section>
</template>

<script>

export default {
  name: 'Cafe',
  props: ['title', 'description', 'path', 'imageUrl']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>