<template>
    <div class="container has-text-centered">
        <h2 class="title is-size-2">This Website</h2>
        <p>I needed a personal website to showcase my skills and projects. <br>The site went through various changes before I finally decided on this design, layout, and color scheme.</p>
        <p>This project was made in combination with Nuxt.js, Vue.js, Bulma, Bulma-Dracula, FontAwesome, and node-sass. It is hosted on GitHub Pages.</p>
        <p>You are currently viewing my personal website but the link is <a href="https://jazminenichols.me/" target="_blank">here</a>.</p>
        <p><img src="~/assets/images/website-screenshot.png" alt="This website's screenshot"></p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'This Website - Projects - Jazmine Nichols'
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

img {
    margin: auto;
}
</style>