<template>
  <div id="app">
    <page-header />
    <nuxt />
    <newsletter />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '~/components/header/Header'
import Newsletter from '~/components/sections/Newsletter'
import PageFooter from '~/components/footer/Footer'

export default {
  name: 'App',
  components: {
    PageHeader,
    Newsletter,
    PageFooter
  }
}
</script>
