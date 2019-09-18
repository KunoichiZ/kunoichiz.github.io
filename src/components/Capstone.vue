<template>
  <div class="card">
    <p class="card-header-title is-centered">Capstone</p>
    <nuxt-link to="/project/capstone">
        <div class="card-image">
            <div>
                <figure>
                    <img src="../assets/images/capstone-screenshot.png" alt="Capstone screenshot">
                </figure>
            </div>
        </div>
        <div class="card-content">
            <div class="content">This website was made for the my final semester at MNTC's capstone project. I made with website along with 2 other people. Each page has its own CSS and style to it and each page covers different topics. <br><span class="tag is-primary">HTML</span> <span class="tag is-primary">CSS</span></div>
        </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 375px;
  background-color: rgb(172,172,172);
  border-radius: 25px;
}

.card:hover {
  background-color: rgb(116,116,116);
  color: white;
}

figure {
  width: 350px;
  height: 150px;
  line-height: 250px;
  text-align: center;
}

img {
  margin-top: -90px;
  vertical-align: middle;
  margin-right: 50px;
  width: 300px;
  height: 125px;
}

.card-content {
  margin-top: -25px;
}

a {
    color: black;
}
</style>