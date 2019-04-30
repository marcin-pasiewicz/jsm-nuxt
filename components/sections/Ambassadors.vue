<template>
  <section id="ambassadors" class="ambassadors relative no-scroll bg-primary">
    <div class="tiles flex flex-wrap" :class="{display: profileVisible}">
      <div class="tile wide flex middle-xs center-xs bg-secondary">
        <h3 class="m-0 cl-white">
          Ambasadorzy
        </h3>
      </div>

      <transition name="fade" mode="in-out">
        <div v-show="profileVisible" class="profile cover absolute h-100 w-100 p-80 flex flex-column between-xs start-xs zi-1" :style="{'background-image': 'url(' + require('../../assets/img/ambassadors/siemaszko.jpg') + ')'}">
          <i class="fas fa-arrow-left relative cl-white pointer mb-40 f-xl zi-1" @click="hideProfile()" />
          <div class="info relative cl-white w-50 zi-1">
            <h3>
              Kamil Siemaszko
            </h3>
            <p>
              Mistrz Polski Muay Thai z 2014 roku oraz Wice-Mistrz Polski Muay Thai IFMA z 2015 roku. Wicemistrz Polski IMFA także z 2017. Weganin.
            </p>
            <a href="/" class="btn inline-block cl-black mt-20" target="_blank">Zobacz video</a>
          </div>
        </div>
      </transition>

      <div v-for="index in 30" :key="index" v-scroll-to="'#ambassadors'" class="tile flex person pointer relative bg-secondary zi-0" @click="showProfile()">
        <div class="photo w-100 h-100 absolute cover" :style="{'background-image': 'url(' + require('../../assets/img/ambassadors/siemaszko.jpg') + ')'}" />
        <h4 class="m-0 w-100 p-10 name uppercase flex bottom-xs start-xs zi-1">
          Kamil Siemaszko
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Ambassadors',
  data() {
    return {
      profileVisible: false
    }
  },
  methods: {
    showProfile() {
      this.profileVisible = true
    },
    hideProfile() {
      this.profileVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';
  @import '~assets/css/mixins/shade.scss';

  .ambassadors {
    .tiles {
      &.display {
        height: 0;
        padding-bottom: 50%;

        @include md {
          padding-bottom: 70%;
        }

        @include xs {
          padding-bottom: 125%;
        }
      }

      .tile {
        transition: width 500ms ease;
        width: calc(100% / 8);

        @include md {
          width: calc(100% / 6);
        }

        @include sm {
          width: calc(100% / 4);
        }

        @include xs {
          width: calc(100% / 3);
        }

        &.wide {
          width: calc(100% / 8 * 2);

          @include md {
            width: calc(100% / 6 * 2);
          }

          @include sm {
            width: calc(100% / 4 * 2);
          }

          @include xs {
          width: calc(100% / 3 * 2);
          }
        }

        &.title {
          background: map-get($colors, black);
        }

        &.person {
          overflow: hidden;

          &:after {
            content: "";
            display: block;
            padding-bottom: 100%;
          }

          &:hover {
            h4 {
              opacity: 1;
            }

            .photo {
              transform: scale(1.1);
            }
          }
        }

        h4 {
          background: rgba(map-get($colors, gold), .7);
          opacity: 0;
          transition: all .25s ease-in-out;
        }
      }
    }

    .profile {
      @include shade(black, 0.7);

      @include sm {
        padding: 40px;
      }

      .info {
        @include md {
          width: 70%;
        }

        @include sm {
          width: 100%;
        }
      }

      .btn {
        @include sm {
          margin-top: 0;
        }
      }
    }

    .photo {
      backface-visibility: hidden;
      transition: all .5s ease-in-out;
    }
  }
</style>
