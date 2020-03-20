<template>
  <Layout>
    <div class="card text-center w-50 mx-auto">
      <b-row class="card-body align-items-center">
        <b-col>
          <h5 class="text-left">Cappucino <i class="far fa-heart text-dark"></i></h5>
          <p class="text-left">Vom Sofa aus einen Kaffee trinken, ohne ihn trinken zu müssen!</p>
        </b-col>
        <b-col>
          <!-- <div class="p-2">
            <i class="fas fa-chalkboard-teacher text-blue"></i>
          </div> -->
          <a href="#" class="btn btn-outline-dark">Kaufen</a>
        </b-col>
      </b-row>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  cafe: contentfulCafe (id: $id) {
    title
    description
    paypal
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
</style>
