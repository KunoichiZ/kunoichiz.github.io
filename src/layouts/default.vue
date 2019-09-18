<template>
  <div>
    <Navbar></Navbar>
    <nuxt />
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Foot,
    Navbar
  }
}
</script>

<style>

</style>
