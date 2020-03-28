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
      <div class="card text-center">
        <b-row class="card-body align-items-center">
          <b-col sm="6">
            <h5 class="text-left">Espresso <i class="far fa-heart text-dark"></i></h5>
            <p class="text-left">Genieße deinen virtuellen Espresso von zu Hause!</p>
            <small v-if="$page.cafe.statement" class="text-left d-block font-italic">"{{ $page.cafe.statement }}"</small>
          </b-col>
          <b-col sm="6" class="text-right">
            <p><b>2.50 €</b></p>
            <a v-if="!show" :href="$page.cafe.paypal + '2.5'" class="btn btn-dark" target="_blank" @click="modal = true">Bestellen</a>
            <!-- <a class="btn btn-dark" target="_blank" @click="sendClick">Kaufen</a> -->
            <!-- <img v-if="loading" src="https://media.giphy.com/media/gOQ6EgtAiwXde/source.gif" alt="coffee for cologne" width="100"> -->
            <b-modal v-model="modal" hide-footer hide-header centered>
              <template v-slot:modal-title>
                <h4>Dein Kaffee is fertig!</h4>
              </template>
              <div class="d-block text-center">
                  <img v-if="!show" src="https://media.giphy.com/media/gOQ6EgtAiwXde/source.gif" alt="" style="width: 50%">
              </div>
              <b-button v-if="!show" id="paypal" class="mt-3 btn-dark" block @click="modal = false">Enjoy your coffee <i class="far fa-heart text-light"></i></b-button>
            </b-modal>
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
import axios from 'axios'


export default {
  metaInfo() {
    return {
    }
  },
  data() {
    return {
      show: false,
      modal: false
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
    sendClick(name){
      console.log("Click")
      this.modal = true;
      this.show = true;
      setTimeout(() => {
        this.show = !this.show
      }, 7000)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 5px;
  max-width: 480px;
}
.modal-title {
  font-size: .8em;
}
div.card {
  margin-bottom: 20%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}
.fade-enter,
.fade-leave-to {
    opacity: 0
}
@media (max-width: 768px) {
  section {
    width: 100% !important;
  }
}
</style>
