<template>
  <div class="home">
    <hero />
    <about />
    <quotes />
    <ebook />
    <ambassadors />
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero'
import About from '~/components/sections/About'
import Quotes from '~/components/sections/Quotes'
import Ebook from '~/components/sections/Ebook'
import Ambassadors from '~/components/sections/Ambassadors'

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Quotes,
    Ebook,
    Ambassadors
  }
}
</script>
