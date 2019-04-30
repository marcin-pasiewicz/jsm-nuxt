<template>
  <header class="flex transparent between-xs middle-xs px-80 py-10 w-100 cl-white" :class="{sticky: isSticky, visible: isVisible, hidden: isHidden, main: this.$route.name == 'Home'}">
    <logo :width="isSticky ? 100 : 120" class="mr-20" />
    <navigation :is-sticky="isSticky" />
  </header>
</template>

<script>
import Logo from '~/components/header/Logo'
import Navigation from '~/components/header/Navigation'

export default {
  name: 'Header',
  components: {
    Logo,
    Navigation
  },
  data() {
    return {
      isSticky: false,
      isVisible: false,
      isHidden: false,
      stickyOffset: 300,
      hiddenOffset: 350,
      lastScrollTop: 0
    }
  },
  watch: {
    $route() {
      this.isSticky = false
      this.isVisible = true
      this.isHidden = true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const isScrollingTop = window.pageYOffset < this.lastScrollTop
      this.lastScrollTop = window.pageYOffset

      const hiddenDown = this.isSticky && !isScrollingTop && window.pageYOffset > this.hiddenOffset
      const hiddenUp = this.isSticky && isScrollingTop && window.pageYOffset < this.hiddenOffset

      this.isSticky = window.pageYOffset > this.stickyOffset
      this.isVisible = this.isSticky && isScrollingTop && window.pageYOffset > this.hiddenOffset
      this.isHidden = hiddenDown || hiddenUp
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';

  header {
    background: rgba(map-get($colors, black), .9);
    top: 0;
    left: 0;
    z-index: 9;

    @include sm {
      padding: 10px 40px;
    }

    &.main {
      background: transparent;
      position: absolute;
    }

    &.sticky {
      background: rgba(map-get($colors, black), .8);
      position: fixed;
      top: -100px;
    }

    &.hidden {
      transition: top .5s ease;
    }

    &.visible {
      top: 0;
      transition: top .5s ease;
    }
  }
</style>
