<template>
  <div class="navigation">
    <nav class="flex between-xs middle-xs f-s" :class="{ active: mobileMenuActive, 'f-xs': isSticky}">
      <router-link v-scroll-to="'#about'" to="/" class="mr-40 uppercase nav-link nowrap" @click="toggleNav">
        O kampanii
      </router-link>
      <router-link v-scroll-to="'#ebook'" class="mr-40 uppercase nav-link nowrap" to="/" @click="toggleNav">
        Ebook
      </router-link>
      <router-link v-scroll-to="'#ambassadors'" class="mr-40 uppercase nav-link nowrap" to="/" @click="toggleNav">
        Ambasadorzy
      </router-link>
      <router-link v-scroll-to="'#contact'" class="mr-40 uppercase nav-link nowrap" to="/" @click="toggleNav">
        Kontakt
      </router-link>
      <router-link class="mr-40 uppercase nav-link nowrap cl-gold" to="/map" @click="toggleNav">
        Mapa
      </router-link>
      <router-link class="uppercase nav-link nowrap cl-gold" to="/blog" @click="toggleNav">
        Blog
      </router-link>
    </nav>
    <i class="fas fa-bars relative f-xl mobile-nav zi-1" @click="toggleNav" />
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    isSticky: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      mobileMenuActive: false
    }
  },
  methods: {
    toggleNav() {
      this.mobileMenuActive = !this.mobileMenuActive
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/fonts.scss';
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';

  nav {
    @include sm {
      background: rgba(map-get($colors, black), .9);
      flex-direction: column;
      justify-content: center;
      position: fixed;
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      opacity: 0;
      pointer-events: none;
      z-index: 1;

      &.active {
        opacity: 1;
        pointer-events: all;
      }
    }

    .nav-link {
      @include md {
        margin-right: 20px;
      }

      @include sm {
        margin: 20px 0;
      }
    }
  }

  .mobile-nav {
    cursor: pointer;
    display: none;

    @include sm {
      display: block;
    }
  }
</style>
