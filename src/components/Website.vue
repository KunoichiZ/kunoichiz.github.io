<template>
  <div class="card">
    <p class="card-header-title is-centered">This Website</p>
    <nuxt-link to="/project/this-website">
        <div class="card-image">
            <div>
                <figure>
                    <img src="~/assets/images/website-screenshot.png" alt="This website's screenshot">
                </figure>
            </div>
        </div>
        <div class="card-content">
            <div class="content">This is my personal website. Gives details on my contact info, work history, among other things. <br><span class="tag is-primary">Nuxt.js</span> <span class="tag is-primary">Vue.js</span> <span class="tag is-primary">Bulma</span></div>
        </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 375px;
  background-color: #ff79c6;
  border-radius: 25px;
}

.card:hover {
  background-color: #ffb3de;
}

figure {
  width: 350px;
  height: 150px;
  line-height: 250px;
  text-align: center;
}

img {
  margin-top: -70px;
  vertical-align: middle;
  margin-right: 45px;
  width: 250px;
  height: 126px;
}

a {
    color: black;
}
</style>