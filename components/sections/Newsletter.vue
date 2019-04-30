<template>
  <section id="newsletter" class="newsletter cover flex relative bg-primary middle-xs center-xs p-80 cl-white">
    <div class="newsletter-form">
      <div class="content align-center">
        <h3>Newsletter</h3>
        <p class="f-s">
          Zasubskrybuj już dziś i bądź na bieżąco po Jasnej Stronie Mocy!
        </p>
        <newsletter-form />
      </div>
    </div>
  </section>
</template>

<script>
import NewsletterForm from '../newsletter/NewsletterForm'

export default {
  name: 'Newsletter',
  components: {
    NewsletterForm
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';

  .newsletter {
    background-image: url('../../assets/img/noise.jpg');
    background-attachment: fixed;

    @include sm {
      padding: 80px 40px
    }
  }
</style>
