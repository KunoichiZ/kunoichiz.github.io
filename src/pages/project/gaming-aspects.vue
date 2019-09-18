<template>
    <div class="container has-text-centered">
        <h2 class="title is-size-2">Gaming Aspects of the United States and Japan</h2>
        <p>This website was made during my Spring 2015 semester at Oklahoma City Community College. It displays some basic information about the gaming aspects on the United States and Japan at the time.</p>
        <p>This project was made in combination with HTML, CSS, JavaScript, and jQuery. It is hosted on GitHub Pages.</p>
        <p>You can view the site <a href="https://jazminenichols.me/gaming-aspects/" target="_blank">here</a>.</p>
        <p><img src="~/assets/images/gaming-aspects-screenshot.png" alt="Gaming Aspects screenshot"></p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Gaming Aspects of the United States and Japan - Projects - Jazmine Nichols'
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