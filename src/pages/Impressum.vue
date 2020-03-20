<template>
  <Layout>
    <Title title="Impressum & Datenschutz" />
    <b-container class="m-5 w-50 mx-auto">
    </b-container>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Wir lieben Cafés'
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 6% 0;
}
div.w-50 {
  width: 100% !important    ;
}
</style>
