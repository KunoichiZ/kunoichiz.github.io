<template>
  <div class="body">
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Website © 2019 Jazmine Nichols (KunoichiZ)</p>
        <p>Website generated with &#x2764; by <a href="https://nuxtjs.org/">Nuxt.js</a> and <a href="https://bulma.io/">Bulma</a></p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.footer {
  background-color: #ff79c6;
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  border-radius: 15px;
  flex: 1;
  height: 0.5px;
}

a {
    color: black;
}
</style>