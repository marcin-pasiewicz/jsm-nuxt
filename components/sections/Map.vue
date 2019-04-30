<template>
  <section id="map" class="map flex relative bg-primary middle-xs center-xs p-80">
    <div class="content">
      <h3>Mapa</h3>
      <p class="aling-center">
        Mapa zaprzyjaźnionych miejsc, sportowców, trenerów i dietetyków.
      </p>
      <router-link class="btn mt-40" to="map">
        Zobacz mapę
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';
</style>
