<template>
    <div class="container has-text-centered">
        <h2 class="title is-size-2">Capstone</h2>
        <p>This website was made during my Spring 2014 semester at Moore Norman Technology Center. It was made for the course's capstone project. I made with website along with 2 other people. Each page has its own CSS and style to it and each page covers different topics.</p>
        <p>This project was made in combination with HTML and CSS. It is hosted on GitHub Pages.</p>
        <p>You can view the site <a href="https://jazminenichols.me/capstone" target="_blank">here</a>.</p>
        <p><img src="~/assets/images/capstone-screenshot.png" alt="Capstone screenshot"></p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Capstone - Projects - Jazmine Nichols'
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