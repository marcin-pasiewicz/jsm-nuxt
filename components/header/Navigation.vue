<template>
  <div class="navigation">
    <nav class="flex between-xs middle-xs" :class="{ active: mobileMenuActive, 'f-xs': isSticky}">
      <router-link v-scroll-to="'#about'" to="/#about" class="mr-40 uppercase nav-link nowrap" @click.native="toggleNav">
        O kampanii
      </router-link>
      <router-link v-scroll-to="'#ebook'" class="mr-40 uppercase nav-link nowrap" to="/#ebook" @click.native="toggleNav">
        Ebook
      </router-link>
      <router-link v-scroll-to="'#ambassadors'" class="mr-40 uppercase nav-link nowrap" to="/#ambassadors" @click.native="toggleNav">
        Ambasadorzy
      </router-link>
      <router-link v-scroll-to="'#contact'" class="mr-40 uppercase nav-link nowrap" to="/#contact" @click.native="toggleNav">
        Kontakt
      </router-link>
      <router-link class="mr-40 uppercase nav-link nowrap cl-gold" to="/map" @click.native="toggleNav">
        Mapa
      </router-link>
      <router-link class="uppercase nav-link nowrap cl-gold" to="/blog" @click.native="toggleNav">
        Blog
      </router-link>
    </nav>
    <i v-if="!mobileMenuActive" class="fas fa-bars relative f-xl mobile-nav zi-1" @click="toggleNav" />
    <i v-else class="fas fa-times fixed f-xl mobile-nav zi-1 close-nav cl-gold" :class="{ sticky: isSticky}" @click="toggleNav" /></i>
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
      if (window.innerWidth <= 768) {
        this.mobileMenuActive = !this.mobileMenuActive
        document.body.classList.toggle('no-scroll')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/fonts.scss';
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';

  nav {
    font-size: $font-size-s;

    @include sm {
      background: map-get($colors, black);
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
        font-size: $font-size-m;
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

    &:hover {
      color: map-get($colors, gold);
      transition: all .5s ease-in-out;
    }

    &.close-nav {
      right: 40px;
      top: 20px;

      &.sticky {
        top: 20px;
      }
    }
  }
</style>
