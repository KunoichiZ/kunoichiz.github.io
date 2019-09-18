<template>
    <aside class="menu has-text-centered">
        <div class="profile">
            <img src="/profile.gif" class="image">
        </div>
        <ul class="menu-list">
            <li><nuxt-link class="link" to="#about" exact v-scroll-to="'#about'">About</nuxt-link></li>
            <li><nuxt-link class="link" to="#education" exact v-scroll-to="'#education'">Education</nuxt-link></li>
            <li><nuxt-link class="link" to="#experience" exact v-scroll-to="'#experience'">Experience</nuxt-link></li>
            <li><nuxt-link class="link" to="#skills" exact v-scroll-to="'#skills'">Skills</nuxt-link></li>
            <li><nuxt-link class="link" to="#interests" exact v-scroll-to="'#interests'">Interests</nuxt-link></li>
            <li><nuxt-link class="link" to="#awards" exact v-scroll-to="'#awards'">Awards</nuxt-link></li>
            <li><nuxt-link class="link" to="#certifications" exact v-scroll-to="'#certifications'">Certifications</nuxt-link></li>
        </ul>
    </aside>
</template>

<style scoped>
.menu {
    background-color: #ff79c6;
    padding-top: 75px;
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
    position: fixed;
    height: 500px;
}

.link {
    color: white;
}

.profile {
    background-color: #282a36;
    width: 100px;
    margin: auto;
    border-radius: 50px;
    border: 5px solid #ff79c6;
}

.image {
    margin: auto;
}
</style>