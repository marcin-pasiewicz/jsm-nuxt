<template>
  <transition name="fade" mode="out-in">
    <div v-show="showModal" class="newsletter-popup modal">
      <div class="modal-content align-center">
        <h3>
          Zapisz się na newsletter
        </h3>
        <p class="f-s">
          Zasubskrybuj newsletter i odbierz e-booka! Znajdziesz w nim newsy ze świata sportowców, informacje o eventach, oraz kody rabatowe do zaprzyjaźnionych sklepów.
        </p>
        <newsletter-form class="my-20" @signedUp="openMessage" />
        <span class="modal-close" @click="closeModal"><i class="fas fa-times" /></span>
      </div>
    </div>
  </transition>
</template>

<script>
import NewsletterForm from '../newsletter/NewsletterForm'

export default {
  name: 'NewsletterPopup',
  components: {
    NewsletterForm
  },
  props: {
    showModal: {
      type: Boolean
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    openMessage(success) {
      this.$emit('openMessage', success)
      this.$emit('closeModal')
    }
  }
}
</script>
