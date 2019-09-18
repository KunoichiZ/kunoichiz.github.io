<template>
    <div class="container has-text-centered">
        <h2 class="title is-size-2">Magnezone</h2>
        <p>Magnezone, or Sheriff Magnezone as he is officially called, is a Discord bot made for the Pokemon Crossroads Discord server.</p>
        <p>This project was made in combination with Discord.js and Discord.js-commando. The documentation website was made with VuePress and is hosted on Netlify.</p>
        <p>You can view the documentation for Magnezone <a href="https://magnezone.netlify.com/" target="_blank">here</a> and the source code <a href="https://github.com/KunoichiZ/Magnezone" target="_blank">here</a>.</p>
        <p><img src="../../assets/images/magnezone.png" alt="Sheriff Magnezone avatar"></p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Magnezone - Projects - Jazmine Nichols'
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