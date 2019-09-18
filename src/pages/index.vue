<template>
    <div class="container has-text-centered">
      <!-- about component -->
      <br>
      <About></About>
      <!-- experience component -->
      <br>
      <Experience></Experience>
      <!-- education component -->
      <br>
      <Education></Education>

      <!-- skills component -->
      <br>
      <Skills></Skills>
      <!-- interests components -->
      <br>
      <Interests></Interests>
      <!-- awards component -->
      <br>
      <Awards></Awards>
        <!-- certifications component -->
      <br>
      <Certifications></Certifications>
  </div>
</template>

<script>
import About from '~/components/About.vue'
import Awards from '~/components/Awards.vue'
import Certifications from '~/components/Certifications'
import Education from '~/components/Education.vue'
import Experience from '~/components/Experience.vue'
import Interests from '~/components/Interests.vue'
import Skills from '~/components/Skills.vue'

export default {
  components: {
    About,
    Awards,
    Certifications,
    Education,
    Experience,
    Interests,
    Skills
  },
  data () {
    return {
      title: 'Home - Jazmine Nichols'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'home page' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
