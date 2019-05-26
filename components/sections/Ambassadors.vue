<template>
  <section v-if="ambassadors.length" id="ambassadors" class="ambassadors relative no-scroll bg-primary">
    <div class="tiles flex flex-wrap">
      <div class="tile wide flex middle-xs center-xs bg-secondary">
        <h3 class="m-0 cl-white">
          Ambasadorzy
        </h3>
      </div>

      <div v-for="(ambassador, index) in ambassadors" :key="index" v-scroll-to="'#ambassadors'" class="tile flex person pointer relative bg-secondary zi-0" @click="showProfile(ambassador)">
        <div class="photo w-100 h-100 absolute cover" :style="{'background-image': 'url(' + require('~/assets/img/' + ambassador.image) + ')'}" />
        <h4 class="m-0 w-100 p-10 name uppercase flex bottom-xs start-xs zi-1">
          {{ ambassador.name }}
        </h4>
      </div>

      <div class="tile flex middle-xs center-xs bg-secondary">
        <i class="fas fa-arrow-right relative cl-white pointer f-xl zi-1" />
      </div>

      <transition name="fade" mode="in-out">
        <div v-if="profile && profileVisible" class="profile cover absolute h-100 w-100 p-80 flex flex-column between-xs start-xs zi-1" :style="{'background-image': 'url(' + require('../../assets/img/ambassadors/siemaszko.jpg') + ')'}">
          <i class="fas fa-arrow-left relative cl-white pointer mb-40 f-xl zi-1" @click="hideProfile()" />
          <div class="info relative cl-white w-50 zi-1">
            <h3>
              {{ profile.name }}
            </h3>
            <p>
              {{ profile.desc }}
            </p>
            <a :href="profile.video" class="btn inline-block mt-20" target="_blank">Zobacz video</a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Ambassadors',
  data() {
    return {
      profileVisible: false,
      ambassadors: [],
      profile: null
    }
  },
  async mounted() {
    await this.updateAmbassadors()
    const data = this.$store.state.backend.ambassadors
    this.ambassadors = data
  },
  methods: {
    ...mapActions({
      updateAmbassadors: 'updateAmbassadors'
    }),
    showProfile(ambassador) {
      this.profileVisible = true
      this.profile = ambassador
    },
    hideProfile() {
      this.profileVisible = false
      this.profile = null
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
