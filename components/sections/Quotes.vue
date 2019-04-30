<template>
  <section id="quotes" class="quotes relative flex flex-column align-end end-xs">
    <h2 class="align-right cl-white px-80 zi-1">
      Sportowcy o <br> diecie roślinnej
    </h2>
    <hooper class="slides image-slides absolute h-100 w-100" :settings="imageSliderSettings" sync="hooper2">
      <slide>
        <img class="block slide-img vw-100" src="../../assets/img/slides/slide-1.jpg">
      </slide>
      <slide>
        <img class="block slide-img vw-100" src="../../assets/img/slides/slide-2.jpg">
      </slide>
      <slide>
        <img class="block slide-img vw-100" src="../../assets/img/slides/slide-3.jpg">
      </slide>
      <slide>
        <img class="block slide-img vw-100" src="../../assets/img/slides/slide-4.jpg">
      </slide>
      <slide>
        <img class="block slide-img vw-100" src="../../assets/img/slides/slide-5.jpg">
      </slide>
    </hooper>
    <hooper ref="hooper2" class="slides quotes-slides relative h-auto zi-1" :settings="quoteSliderSettings">
      <slide>
        <div class="slide-quote px-80 align-right cl-white">
          <p class="slide-text">
            "Na początku zainteresowałem się weganizmem z naukowego punktu widzenia. Potem pojawiła się jednak refleksja etyczna. Nie muszę już przykładać się do cierpienia i bólu bezbronnych zwierząt."
          </p>
          <span class="quote-author block f-s f-bold mb-20">Alexey Voyevoda, mistrz olimpijski w bobsleju, weganin.</span>
        </div>
      </slide>
      <slide>
        <div class="slide-quote px-80 align-right cl-white">
          <p class="slide-text">
            "Zdołałem się przekonać, że białko zawarte w mięsie nie jest potrzebne do tego, aby być jednym z najlepszych sportowców na świecie. Prawdę mówiąc, mój najlepszy rok na bieżni to ten, gdy przeszedłem na dietę wegańską."
          </p>
          <span class="quote-author block f-s f-bold mb-20">Carl Lewis, lekkoatleta, wielokrotny rekordzista świata, weganin.</span>
        </div>
      </slide>
      <slide>
        <div class="slide-quote px-80 align-right cl-white">
          <p class="slide-text">
            "Jest mnóstwo roślinnych źródeł białka, a Twoje ciało będzie Ci wdzięczne, gdy zaprzestaniesz jeść martwe zwierzęta. Przejdź na dietę roślinną i poczuj prawdziwą siłę."
          </p>
          <span class="quote-author block f-s f-bold mb-20">Patrik Baboumian, utytułowany strongman, weganin.</span>
        </div>
      </slide>
      <slide>
        <div class="slide-quote px-80 align-right cl-white">
          <p class="slide-text">
            "Przez całe moje życie ludzie próbowali mnie przekonać do jedzenia mięsa, mówiąc, że nie będę mógł zostać zawodowym sportowcem tej klasy. Uwielbiam udowadniać im, że się mylą."
          </p>
          <span class="quote-author block f-s f-bold mb-20">Jake Shields, zawodnik MMA, od urodzenia na diecie bezmięsnej.</span>
        </div>
      </slide>
      <slide>
        <div class="slide-quote px-80 align-right cl-white">
          <p class="slide-text">
            "Weganizm pomaga mi nie czuć się padniętym, kiedy jestem zmuszony trenować przez cały tydzień"
          </p>
          <span class="quote-author block f-s f-bold mb-20">Nate Diaz, zawodnik mma, brazylijskiego jiu jitsu i triatlonista, weganin.</span>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons" class="relative flex center-xs mt-40" />
    </hooper>
  </section>
</template>

<script>
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
        shortDrag: false,
        wheelControl: false,
        transition: 500
      },

      quoteSliderSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        autoPlay: false,
        playSpeed: 4000,
        shortDrag: false,
        wheelControl: false,
        transition: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixins/breakpoints.scss';

  .quotes {
    height: 600px;

    h2 {
      @include sm {
        padding: 0 40px;
      }
    }

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
