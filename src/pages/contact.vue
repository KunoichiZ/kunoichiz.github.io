<template>
    <div class="container has-text-centered">
        <h2 class="title is-size-2">Contact Me</h2>
        <form name="contact" action="https://formspree.io/jazmine.r.nichols@gmail.com" method="POST" >
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" name="name" type="text" placeholder="e.g John Doe">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input class="input" type="email" name="_replyto" placeholder="e.g. johndoe@example.com">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label for="phone" class="label">Phone Number</label>
                <div class="control has-icons-left">
                    <input class="input" type="tel" name="phone" placeholder="Your phone number">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" name="message" placeholder="Please leave me a message"></textarea>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
            </div>
        </form>
        <br><br>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Contact Me - Jazmine Nichols'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'contact form' }
      ]
    }
  }
}
</script>

<style scoped>
.control {
    width: 500px;
    margin: auto;
}

.hidden {
    display: none;
}
</style>