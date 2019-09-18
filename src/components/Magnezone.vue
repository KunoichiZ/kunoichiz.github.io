<template>
  <div class="card">
    <p class="card-header-title is-centered">Magnezone</p>
    <nuxt-link to="/project/magnezone">
        <div class="card-image">
            <div>
                <figure>
                    <img src="~/assets/images/magnezone.png" alt="Officer Magnezone avatar">
                </figure>
            </div>
        </div>
        <div class="card-content">
            <div class="content">Officer Magnezone is a discord.js/discord.js-commando bot for the Pokemon Crossroads discord server. <br><span class="tag is-primary">Discord.js</span> <span class="tag is-primary">Discord.js-commando</span></div>
        </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 375px;
  background-color: #b6bab6;
  border-radius: 25px;
}

.card:hover {
  background-color: lightgray;
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
  width: 150px;
  height: 134px;
}

a {
    color: black;
}
</style>