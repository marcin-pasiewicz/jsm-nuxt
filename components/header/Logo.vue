<template>
  <router-link to="/" class="logo zi-1">
    <img src="../../assets/img/logo.png" :width="width" alt="Jasna Strona Mocy">
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    width: {
      type: Number,
      required: false,
      default: 120
    }
  }
}
</script>
