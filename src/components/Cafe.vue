<template>
    <section>
      <b-card
            :title="title"
            img-top
            tag="article"
            class="mb-2"
        >

            <div id="back" :style="url"></div>

            <p class="py-3">{{ description.substring(0,100) }}...</p>

            <g-link :to="path"><b-button block variant="dark">Kaffee trinken</b-button></g-link>
        </b-card>
    </section>
</template>

<script>

export default {
  name: 'Cafe',
  props: ['title', 'description', 'path', 'imageUrl'],
  data(){
    return {
      url: 'background-image: url(' + this.imageUrl + ')'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#back {
  width: 100%;
  background-size: cover;
  height: 200px;
}
</style>