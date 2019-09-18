<template>
    <div class="container has-text-centered">
      <h2 class="title is-size-2">Projects</h2>
      <div class="columns is-multiline is-centered">
        <div class="column is-narrow">
          <ACNLModding></ACNLModding>
        </div>
        <div class="column is-narrow">
          <Magnezone></Magnezone>
        </div>
        <div class="column is-narrow">
          <Website></Website>
        </div>
        <div class="column is-narrow">
          <Capstone></Capstone>
        </div>
        <div class="column is-narrow">
          <GamingAspects></GamingAspects>
        </div>
      </div>
      <br>
    </div>
</template>

<script>
import ACNLModding from '~/components/ACNLModding.vue'
import Capstone from '~/components/Capstone.vue'
import GamingAspects from '~/components/GamingAspects.vue'
import Magnezone from '~/components/Magnezone.vue'
import Website from '~/components/Website.vue'

export default {
  components: {
    ACNLModding,
    Capstone,
    GamingAspects,
    Magnezone,
    Website
  },
  data () {
    return {
      title: 'Projects - Jazmine Nichols'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'projects' }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
}

.acnl {
  background-color: #42f44e;
}
</style>