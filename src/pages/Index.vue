<template>
  <Layout>
    <!-- <Title title="Cafe Support" /> -->
    <b-container>
      <b-row>
        <b-col sm="6">
          <h2>Support Local Cafés</h2>
          <p>text text text</p>
        </b-col>
        <b-col sm="6">
          <img src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="poster">
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Support Your Local'
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
