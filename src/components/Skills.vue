<template>
    <div class="container has-text-centered">
        <div id="skills">
            <h2 class="title is-size-2">Skills</h2>
            <ul id="list">
                <li><button class="button is-link">HTML5 and CSS3</button></li>
                <li><button class="button is-primary">JavaScript</button></li>
                <li><button class="button is-success">Vue.js and Nuxt.js</button></li>
                <li><button class="button is-warning">Microsoft Office</button></li>
                <li><button class="button is-danger">Adobe Photoshop</button></li>
                <li><button class="button is-info">Sass</button></li>
                <li><button class="button is-link">Angular</button></li>
                <li><button class="button is-primary">Git</button></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
#skills {
    color: white;
    margin-left: 240px;
    width: 700px;
}

ul#list li {
    display:inline;
    /* text-align: left;
    list-style-type: disc;
    list-style-position: inside; */
}

.is-success, .is-warning, .is-info {
    color: black;
}
</style>