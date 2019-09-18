<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://jazminenichols.me">
                Jazmine Nichols
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
            <div class="navbar-start" style="flex-grow: 0.85; justify-content: center;">
                <div class="navbar-item has-dropdown is-hoverable">
                    <nuxt-link class="navbar-item" to="/" exact>Home</nuxt-link>

                    <div class="navbar-dropdown">
                        <nuxt-link class="navbar-item" to="/#about" exact v-scroll-to="'#about'">About</nuxt-link>

                        <nuxt-link class="navbar-item" to="/#experience" exact v-scroll-to="'#experience'">Experience</nuxt-link>

                        <nuxt-link class="navbar-item" to="/#education" exact v-scroll-to="'#education'">Education</nuxt-link>

                        <nuxt-link class="navbar-item" to="/#skills" exact v-scroll-to="'#skills'">Skills</nuxt-link>

                        <nuxt-link class="navbar-item" to="/#interests" exact v-scroll-to="'#interests'">Interests</nuxt-link>

                        <nuxt-link class="navbar-item" to="/#certifications" exact v-scroll-to="'#experience'">Certifications</nuxt-link>

                    </div>
                </div>
                <nuxt-link class="navbar-item" to="/projects" exact>Projects</nuxt-link>
                <nuxt-link class="navbar-item" to="/contact" exact>Contact Me</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: function() {
        return {
            showNav: false
        }
    }
}
</script>

<style scoped>
.navbar, .navbar-menu, .navbar-dropdown {
    background-color: #ff79c6;
}

.navbar-item, .navbar-menu .navbar-start, .navbar-item .has-dropdown .is-hoverable, .navbar-link {
    color: white;
}
</style>