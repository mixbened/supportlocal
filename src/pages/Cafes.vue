<template>
  <Layout>
    <Title title="Cafés" />
    <div class="text-center d-flex flex-wrap justify-content-between border-top border-bottom filter-container">
        <b-col><g-link to="/cafes/" class="filter p-2 px-2 d-inline-block"><span>Alle</span></g-link></b-col>
        <b-col><g-link to="/belgique/" class="filter p-2 px-2 d-inline-block"><span>Belgisches</span></g-link></b-col>
        <b-col><g-link to="/ehrenfeld/" class="filter p-2 px-2 d-inline-block"><span>Ehrenfeld</span></g-link></b-col>
        <b-col><g-link to="/deutz/" class="filter p-2 px-2 d-inline-block"><span>Deutz</span></g-link></b-col>
        <b-col><g-link to="/suedstadt/" class="filter p-2 px-2 d-inline-block"><span>Südstadt</span></g-link></b-col>
        <b-col><g-link to="/nippes/" class="filter p-2 px-2 d-inline-block"><span>Nippes</span></g-link></b-col>
        <b-col><g-link to="/altstadt/" class="filter p-2 px-2 d-inline-block"><span>Altstadt</span></g-link></b-col>
    </div>
    <!-- <b-dropdown text="Suche nach Viertel" variant="outline-dark" class="filter-container">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown> -->
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
