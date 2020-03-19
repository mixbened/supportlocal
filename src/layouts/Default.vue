<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header/>
      <div class="p-4">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header
  },
}
</script>


<style lang="scss">
</style>
