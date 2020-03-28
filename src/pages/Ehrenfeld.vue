<template>
  <Layout>
    <Title title="Cafés" />
    <div class="text-center d-flex flex-wrap justify-content-between  border-top border-bottom filter-container">
        <b-col sm="6" md="3"><g-link to="/cafes/" class="filter p-2 px-5 d-inline-block"><span>Alle Viertel</span></g-link></b-col>
        <b-col sm="6" md="3"><g-link to="/belgique/" class="filter p-2 px-5 d-inline-block"><span>Belgisches Viertel</span></g-link></b-col>
        <b-col sm="6" md="3"><g-link to="/ehrenfeld/" class="filter p-2 px-5 d-inline-block"><span>Ehrenfeld</span></g-link></b-col>
        <b-col sm="6" md="3"><g-link to="/deutz/" class="filter p-2 px-5 d-inline-block"><span>Deutz</span></g-link></b-col>
    </div>
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
  cafes: allContentfulCafe(filter: { standort: {eq: "ehrenfeld"} }) {
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
