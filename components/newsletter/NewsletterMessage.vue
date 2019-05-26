<template>
  <transition name="fade" mode="out-in">
    <div v-show="showMessage" class="newsletter-popup modal">
      <div class="modal-content align-center cl-black">
        <div v-if="success" class="success-message">
          <h3>
            Dziękujemy!
          </h3>
          <p class="f-s">
            Twój adres e-mail został zapisany w naszej bazie.
          </p>
        </div>
        <div v-else class="error-message">
          <h3>
            Wystąpił błąd
          </h3>
          <p class="f-s">
            Coś poszło nie tak... Spróbuj ponownie później.
          </p>
        </div>
        <button class="btn mt-20" @click="closeMessage">
          Zamknij
        </button>
        <span class="modal-close" @click="closeMessage"><i class="fas fa-times" /></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NewsletterMessage',
  props: {
    showMessage: {
      type: Boolean,
      required: true,
      default: false
    },
    success: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  methods: {
    closeMessage() {
      this.$emit('closeMessage')
    }
  }
}
</script>
