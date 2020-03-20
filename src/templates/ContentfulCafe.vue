<template>
  <Layout>
    <section class="w-50 mx-auto">
      <div class="my-5">
        <h2>{{ $page.cafe.title }}</h2>
        <p>{{ $page.cafe.description }}</p>
        <img :src="$page.cafe.image.file.url" alt="" class="w-100">
      </div>
      <h5>Virtuell genießen</h5>
      <hr>
      <div class="card text-center">
        <b-row class="card-body align-items-center">
          <b-col>
            <h5 class="text-left">Espresso <i class="far fa-heart text-dark"></i></h5>
            <p class="text-left">Vom Sofa aus einen Kaffee trinken, ohne ihn trinken zu müssen!</p>
          </b-col>
          <b-col class="text-right">
            <p><b>2.00 €</b></p>
            <a :href="$page.cafe.paypal + '2'" class="btn btn-outline-dark" target="_blank">Kaufen</a>
            <!-- <div id="paypal-button-container"></div> -->
          </b-col>
        </b-row>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  cafe: contentfulCafe (id: $id) {
    title
    description
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
  components: {
  },
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content, {renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img class="img-fluid" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}"/>`
          }
      }})
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
