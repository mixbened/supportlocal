<template>
  <Layout>
    <Title title="Cafés" />
    <b-container class="my-5">
        <b-row>
          <b-col v-for="edge in $page.cafes.edges" :key="edge.node.id" sm="4" style="margin-bottom: 50px;">
            <Cafe :title="edge.node.title" :description="edge.node.description" :path="edge.node.path" :imageUrl="edge.node.image.file.url"/>
          </b-col>
        </b-row>
      </b-container>
  </Layout>
</template>

<page-query>
query Cafe {
  cafes: allContentfulCafe(sortBy: "title") {
      edges {
        node {
          id
          title
          description
          path
          image {
            file {
              url
            }
          }
        }
      }
  }
}
</page-query>


<script>
import Title from '../components/Title'
import Cafe from '../components/Cafe'

export default {
  metaInfo: {
    title: 'Wir lieben Cafés'
  },
  components: {
    Title,
    Cafe
  }
}
</script>

<style lang="scss" scoped>
</style>
