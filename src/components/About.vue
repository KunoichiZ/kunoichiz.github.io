<template>
    <div class="container has-text-centered">
        <div id="about">
            <h2 class="title is-size-2">About Me</h2>
            <p>Certified Web Developer with 5+ years of HTML5, CSS3, and JavaScript, both via self-education and formal education. I am a passionate web designer that enjoys creating and designing websites in my spare time to further increase my abilities.</p>
            <p>I have experience using both <font-awesome-icon class="envelope" :icon="['fab', 'apple']" :style="{ color: 'white' }" /> MacOS and <font-awesome-icon class="envelope" :icon="['fab', 'windows']" :style="{ color: 'white' }" /> Windows PCs.</p>
            <br>
            <div class="social">
                <a href="mailto:jazmine.r.nichols@gmail.com"><font-awesome-icon class="envelope" :icon="['fas', 'envelope']" :style="{ color: 'white' }" size="2x" /></a>
                <a href="https://github.com/KunoichiZ"><font-awesome-icon class="github" :icon="['fab', 'github']" :style="{ color: 'rgb(25, 25, 25)' }" size="2x" /></a>
                <a href="https://twitter.com/Mystic_Duo"><font-awesome-icon class="twitter" :icon="['fab', 'twitter']" :style="{ color: 'rgb(29, 161, 243)' }" size="2x" /></a>
                <a href="https://www.linkedin.com/in/jazmine-nichols-183444193/"><font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" :style="{ color: '#007bb5' }" size="2x" /></a>
                <a href="https://www.youtube.com/channel/UCmzFbS4ut_P8IW-8OrY28cQ"><font-awesome-icon class="youtube" :icon="['fab', 'youtube']" :style="{ color: 'red' }" size="2x" /></a>
                <a href="https://www.reddit.com/user/kaoru-matsubara"><font-awesome-icon class="reddit" :icon="['fab', 'reddit']" :style="{ color: 'rgb(255, 69, 0)' }" size="2x" /></a>
                <a href="https://twitch.com/ainominako"><font-awesome-icon class="twitch" :icon="['fab', 'twitch']" :style="{ color: 'rgb(100, 65, 164)' }" size="2x" /></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.youtube, .github, .envelope, .twitter, .linkedin, .twitch, .reddit {
    -webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
    filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
}

#about {
    margin-left: 240px;
    width: 700px;
    color: white;
}
</style>