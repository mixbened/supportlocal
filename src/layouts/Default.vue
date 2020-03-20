<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header/>
      <div class="p-4">
        <slot/>
      </div>
      <Footer class="absolute-bottom w-100"/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
}
</script>


<style lang="scss">
</style>
