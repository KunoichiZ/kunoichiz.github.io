<template>
  <div class="card">
    <p class="card-header-title is-centered">Gaming Aspects</p>
    <nuxt-link to="/project/gaming-aspects">
        <div class="card-image">
            <div>
                <figure>
                    <img src="~/assets/images/gaming-aspects-screenshot.png" alt="Gaming Aspects">
                </figure>
            </div>
        </div>
        <div class="card-content">
            <div class="content">This website displays some basic information about the gaming aspects on the United States and Japan at the time. <br><span class="tag is-primary">HTML</span> <span class="tag is-primary">CSS</span> <span class="tag is-primary">JavaScript</span> <span class="tag is-primary">jQuery</span></div>
        </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 375px;
  background-color: rgb(144,48,90);
  border-radius: 25px;
}

.card:hover {
  background-color: rgb(208,115,154);
}

.card-header-title, .content {
  color: white;
}

figure {
  width: 350px;
  height: 150px;
  line-height: 250px;
  text-align: center;
}

img {
  margin-top: -80px;
  vertical-align: middle;
  margin-right: 50px;
  width: 300px;
  height: 125px;
}

a {
    color: black;
}
</style>