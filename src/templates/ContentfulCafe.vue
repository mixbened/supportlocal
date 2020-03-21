<template>
  <Layout>
    <section class="w-50 mx-auto">
      <div class="mb-5">
        <h2>{{ $page.cafe.title }}</h2>
        <p>{{ $page.cafe.description }}</p>
      <img :src="$page.cafe.image.file.url" alt="" class="w-100">
      <small class="my-4 d-block font-italic">Inhaber: {{ $page.cafe.inhaber }}</small>
      </div>
      <h5>Virtuell genießen</h5>
      <hr>
      <div class="card text-center my-3 mb-5">
        <b-row class="card-body align-items-center">
          <b-col sm="6">
            <h5 class="text-left">Espresso <i class="far fa-heart text-dark"></i></h5>
            <p class="text-left">Genieße deinen virtuellen Espresso von zu Hause!</p>
            <small class="text-left d-block font-italic">"{{ $page.cafe.statement }}"</small>
          </b-col>
          <b-col sm="6" class="text-right">
            <p><b>2.50 €</b></p>
            <a :href="$page.cafe.paypal + '2.5'" class="btn btn-dark" target="_blank">Kaufen</a>
            <!-- <div id="paypal-button-container"></div> -->
          </b-col>
        </b-row>
      </div>
        <b-alert
          :show="show"
          variant="warning"
        >Melde dein Café jetzt an um weitergeleitet zu werden...</b-alert>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  cafe: contentfulCafe (id: $id) {
    title
    description
    inhaber
    statement
    paypal
    image {
      file {
        url
      }
    }
  }
}
</page-query>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'


export default {
  metaInfo() {
    return {
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content, {renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img class="img-fluid" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}"/>`
          }
      }})
    },
    check(){
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  section {
    width: 100% !important;
  }
}
</style>
