<template>
    <section>
      <b-card
            :title="title"
            :img-src="'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'"
            img-alt="Article Image"
            img-top
            tag="article"
            class="mb-2"
        >
            <small>{{ description.substring(0,100) }}...</small>

            <g-link :to="path"><b-button block variant="dark">Kaffee trinken</b-button></g-link>
        </b-card>
    </section>
</template>

<script>

export default {
  name: 'Cafe',
  props: ['title', 'description', 'path']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>