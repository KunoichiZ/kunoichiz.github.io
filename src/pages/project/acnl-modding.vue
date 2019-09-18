<template>
    <div class="container has-text-centered">
        <h2 class="title is-size-2">ACNL Modding Info</h2>
        <p>This project was an idea that I had for an Animal Crossing New Leaf (ACNL) Modding/Hacking Discord server. <br>I was inspired to make the site because the information in the Discord server was all over the place and really needed a more general place.</p>
        <p>This project was made in combination with Nuxt.js, Vue.js, Bulma, Buefy, FontAwesome, and node-sass. It is hosted on GitHub Pages.</p>
        <p>A link to the project can be found here: <a href="https://acnl-modding.me/" target="_blank">ACNL Modding Info</a></p>
        <p><img src="../../assets/images/acnl-screenshot.png" alt="ACNL Modding Info screenshot"></p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'ACNL Modding Info - Projects - Jazmine Nichols'
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
p {
    color: white;
}
</style>