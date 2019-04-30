<template>
  <transition name="fade" mode="out-in">
    <div v-show="showModal" class="newsletter-popup modal">
      <div class="modal-content align-center">
        <h3>
          Zapisz się na newsletter
        </h3>
        <p class="f-s">
          Zasubskrybuj newsletter i odbierz e-booka! Znajdziesz w nim newsy, informacje o eventach, oraz kody rabatowe do zaprzyjaźnionych sklepów.
        </p>
        <newsletter-form class="my-20" />
        <small class="block">Szanujemy Twoją prywatność i zapewniamy, że podane informacje będą używane wyłącznie do celów związanych z wysyłaniem informacji o kampanii. Wszystkie informacje na temat przetwarzania Twoich danych osobowych znajdziesz w naszej polityce prywatności. Wypełniając formularz zgadzasz się na przetwarzanie Twoich danych osobowych związanych z komunikacją elektroniczną oraz potwierdzasz, że masz ukończony 16 rok życia.</small>
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
    }
  }
}
</script>
