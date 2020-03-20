<template>
  <Layout>
    <!-- <Title title="Cafe Support" /> -->
    <b-container>
      <b-row>
        <b-col sm="6">
          <h2 class="py-2">Espresso für Kölle</h2>
          <h5>Wir lieben unsere Cafés</h5>
          <p>text text text</p>
        </b-col>
        <b-col sm="6">
          <img src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="poster">
        </b-col>
      </b-row>
      <b-container class="my-5">
      <b-card
            title="Du benötigst auch Hilfe?"
            class="mb-2 w-50 mx-auto"
        >
            <p>Melde dich bei uns für eine Anleitung, wie du auf die Plattform kommst...</p>

            <a href="mailto:help@espress-für-kölle.de"><b-button block variant="dark">Schreibe uns</b-button></a>
        </b-card>
      </b-container>
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
img {
  max-width: 100%;
}

@media (max-width: 768px){
  .w-50 {
    width: 100% !important;
  }
}
</style>
