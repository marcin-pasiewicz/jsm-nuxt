<template>
  <section id="quotes" class="quotes relative flex flex-column align-end end-xs">
    <h2 class="align-right cl-white px-base zi-1">
      Sportowcy o <br> diecie roślinnej
    </h2>
    <hooper v-if="quotes.length" :key="quotes.length" class="slides image-slides absolute h-100 w-100" :settings="imageSliderSettings" sync="hooper2">
      <slide v-for="(quote, index) in quotes" :key="index">
        <img class="block slide-img vw-100" :src="require('~/assets/img/' + quote.image)">
      </slide>
    </hooper>
    <hooper v-if="quotes.length" ref="hooper2" class="slides quotes-slides relative h-auto zi-1" :settings="quoteSliderSettings">
      <slide v-for="(quote, index) in quotes" :key="index">
        <div class="slide-quote px-base align-right cl-white">
          <p class="slide-text">
            {{ quote.text }}
          </p>
          <span class="quote-author block f-s f-bold mb-20">
            {{ quote.author }}
          </span>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons" class="relative flex center-xs mt-40" />
    </hooper>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'Quotes',
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      imageSliderSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        shortDrag: true,
        wheelControl: false,
        transition: 500
      },
      quoteSliderSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000,
        shortDrag: false,
        wheelControl: false,
        transition: 0
      },
      quotes: []
    }
  },
  async mounted() {
    await this.updateQuotes()
    this.quotes = this.$store.state.backend.quotes
  },
  methods: {
    ...mapActions({
      updateQuotes: 'updateQuotes'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixins/breakpoints.scss';

  .quotes {
    height: 600px;

    .image-slides {
      position: absolute;
      height: 100%;
      width: 100%;
    }

    .quotes-slides {
      height: auto;
    }

    .slides {
      outline: none;

      .is-active {
        .slide-quote {
          p,
          span {
            opacity: 1;
          }
        }
      }

      .slide-quote {
        max-width: 55%;

        @include md {
          max-width: 70%;
        }

        @include sm {
          padding: 0 40px;
          max-width: 100%;
        }
      }

      .slide-img {
        object-fit: cover;
      }
    }

    .hooper-pagination {
      position: relative;
      bottom: auto;
    }
  }
</style>
