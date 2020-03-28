<template>
  <Layout>
    <Title title="Impressum" />
    <b-container class="m-5 w-50 mx-auto">
      <p>Eine Initiative von:</p>
      <hr>
      <p>Maximilian Sondermann & Benedikt Mix</p>
      <p>Hansemannstraße 17, 50823 Köln</p>
    <form
      action="https://formspree.io/mqklylav"
      method="POST"
      class="m-5"
    >
    <h2>Kontakt</h2>
    <b-form-group>
      <b-form-input class="my-2" type="text" name="_replyto" placeholder="Deine Email"></b-form-input>
      <b-form-textarea class="my-2" type="text" name="message" placeholder="Deine Nachricht"></b-form-textarea>
      <b-button class="my-2" type="submit">Send</b-button>
      </b-form-group>
    </form>
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
