<template>
  <div class="card">
    <p class="card-header-title is-centered">ACNL Modding Info</p>
    <nuxt-link to="/project/acnl-modding">
        <div class="card-image">
            <div>
                <figure>
                    <img src="~/assets/images/acnl-screenshot.png" alt="ACNL Modding Info screenshot">
                </figure>
            </div>
        </div>
        <div class="card-content">
            <div class="content">ACNL (Animal Crossing New Leaf) Modding Info is a website built to display information related to the NTR Plugin for the game. <br><span class="tag is-primary">Nuxt.js</span> <span class="tag is-primary">Vue.js</span> <span class="tag is-primary">Bulma</span></div>
        </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card {
  width: 375px;
  height: 375px;
  background-color: #42f44e;
  border-radius: 25px;
}

.card:hover {
  background-color: lightgreen;
}

figure {
  width: 350px;
  height: 150px;
  line-height: 250px;
  text-align: center;
}

img {
  /* vertical-align: middle; */
  margin-right: 45px;
  width: 250px;
  height: 126px;
}

a {
    color: black;
}
</style>