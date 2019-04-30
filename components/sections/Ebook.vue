<template>
  <section id="ebook" class="ebook flex relative bg-primary p-80">
    <div class="ebook-info flex flex-column center-xs align-left align-start w-50">
      <h2>Pobierz naszego ebooka</h2>
      <img class="block cover mobile-cover w-100 py-40" src="../../assets/img/ebook-cover.png" alt="Ebook" title="Ebook">
      <p class="aling-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae turpis accumsan quam posuere finibus eget pharetra metus. Na przeszło 80 stronach znajdziesz między innymi:
      </p>
      <ul class="list pl-20 mt-0">
        <li>opinie sportowców</li>
        <li>porady żywieniowe oraz plany treningowe</li>
        <li>przepisy na proste wysokobiałkowe dania roślinne</li>
      </ul>
      <button class="btn mt-40" @click="openModal">
        Pobierz ebooka
      </button>
    </div>
    <div class="ebook-cover flex flex-column middle-xs center-xs w-50 pl-40">
      <img class="block cover w-100" src="../../assets/img/ebook-cover.png" alt="Ebook" title="Ebook">
    </div>
    <newsletter-popup :show-modal="showModal" @closeModal="closeModal" />
  </section>
</template>

<script>
import NewsletterPopup from '../newsletter/NewsletterPopup'

export default {
  name: 'Ebook',
  components: {
    NewsletterPopup
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixins/breakpoints.scss';

  .ebook {
    @include sm {
      padding: 80px 40px;
    }

    .ebook-info {
      @include md {
        width: 60%;
      }

      @include sm {
        width: 100%;
      }

      h2 {
        @include sm {
          text-align: center;
          width: 100%;
        }
      }

      .mobile-cover {
        display: none;
        transform: rotate(15deg);
        margin: 0 auto;
        max-width: 300px;

          @include sm {
            display: block;
          }
      }

      button {
        @include sm {
          margin: 40px auto 0;
        }
      }
    }

    .ebook-cover {
      @include md {
        width: 40%;
      }

      @include sm {
        display: none;
      }

      .cover {
        max-width: 300px;
        transform: rotate(15deg);
      }
    }
  }
</style>
