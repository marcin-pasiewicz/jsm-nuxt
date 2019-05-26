<template>
  <section id="hero" class="hero flex relative no-scroll middle-xs center-xs vh-100 px-base">
    <video class="hero-video absolute vh-100" width="100%" autoplay muted loop>
      <source src="../../assets/video/bg.mp4" type="video/mp4">
    </video>
    <div class="hero-content relative zi-1">
      <h1 class="cl-white">
        Jedz rośliny <br> Podnoś żelazo
      </h1>
      <a v-scroll-to="'#about'" href="/" class="btn">Poznaj zasady diety fair play</a>
    </div>
    <a v-scroll-to="'#about'" href="/" class="scroll-indicator pointer absolute zi-1 p-40">
      <i class="fas fa-chevron-down f-l cl-white" />
    </a>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixins/shade.scss';
  @import '~assets/css/mixins/noise.scss';

  .hero {
    @include shade(black, 0.5);
    @include noise('noise', 0.7);
  }

  .hero-video {
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -9;
  }

  .scroll-indicator {
    bottom: 0;
    opacity: 0.5;
    transition: transform .5s ease;

    &:hover {
      transform: translateY(10px);
    }
  }
</style>
