<template>
  <section id="newsletter" class="newsletter cover flex relative bg-primary middle-xs center-xs px-base py-base cl-white">
    <div class="newsletter-form">
      <div class="content align-center">
        <h3>Newsletter</h3>
        <p class="f-s">
          Zasubskrybuj już dziś i bądź na bieżąco po Jasnej Stronie Mocy!
        </p>
        <newsletter-form @signedUp="openMessage" />
        <newsletter-message :show-message="showMessage" :success="formSuccess" @closeMessage="closeMessage" />
      </div>
    </div>
  </section>
</template>

<script>
import NewsletterForm from '../newsletter/NewsletterForm'
import NewsletterMessage from '../newsletter/NewsletterMessage'

export default {
  name: 'Newsletter',
  components: {
    NewsletterForm,
    NewsletterMessage
  },
  data() {
    return {
      showMessage: false,
      formSuccess: false
    }
  },
  methods: {
    openMessage(success) {
      this.showMessage = true
      this.formSuccess = success
    },
    closeMessage() {
      this.showMessage = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .newsletter {
    background-image: url('../../assets/img/noise.jpg');
    background-attachment: fixed;
  }
</style>
