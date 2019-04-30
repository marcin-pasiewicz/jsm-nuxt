<template>
  <footer class="relative cover">
    <div class="footer-content relative flex py-80 px-40 middle-xs around-xs zi-1">
      <h2 class="m-0 px-40">
        Chcesz działać <br> razem z nami?
      </h2>
      <div id="contact" class="contact flex middle-xs center-xs align-left px-40">
        <ul class="no-list">
          <li class="my-20">
            <a class="block nowrap" href="mailto:kontakt@jasnastronamocy.pl" target="_blank"><i class="far fa-envelope cl-white inline-flex middle-xs center-xs f-l mr-20" /> kontakt@jasnastronamocy.pl</a>
          </li>
          <li class="my-20">
            <a class="block nowrap" href="http://www.facebook.com/jsmocy/" target="_blank"><i class="fab fa-facebook-f cl-white inline-flex middle-xs center-xs f-l mr-20" /> www.facebook.com/jsmocy</a>
          </li>
          <li class="my-20">
            <a class="block nowrap" href="http://www.instagram.com/jsmocy" target="_blank"><i class="fab fa-instagram cl-white inline-flex middle-xs center-xs f-l mr-20" /> www.instagram.com/jsmocy</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-info relative align-center bg-secondary py-20 px-40 zi-1">
      <p class="m-0 f-xs cl-white">
        Administratorem danych osobowych jest Stowarzyszenie Otwarte Klatki.
        <router-link to="/" class="active nowrap">
          Polityka prywatności
        </router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';
  @import '~assets/css/variables/fonts.scss';

  footer {
    background: map-get($colors, white);

    .footer-content {
      @include sm {
        flex-direction: column;
        padding: 80px 40px;
      }

      h2 {
        flex: 1;

        @include sm {
          padding: 0 0 40px;
          text-align: center;
        }

        @include xs {
          font-size: $font-size-l;
        }
      }

      .contact {
        border-left: 2px solid map-get($colors, black);
        flex: 1;

        @include sm {
          border-top: 2px solid map-get($colors, black);
          border-left: 0;
          padding: 20px 0 0;
        }

        ul {
          li {
            &:hover {
              i {
                background: map-get($colors, gold);
              }

              a {
                color: map-get($colors, gold);
              }
            }

            i {
              background: map-get($colors, black);
              border-radius: 100%;
              height: 40px;
              width: 40px;
              transition: all .25s ease;
            }
          }
        }
      }
    }
  }
</style>
