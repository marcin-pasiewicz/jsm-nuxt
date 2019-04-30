<template>
  <div class="blog relative middle-xs p-80">
    <h1 class="center-xs m-0">
      Blog
    </h1>
    <tags />
    <posts />
  </div>
</template>

<script>
import Posts from '~/components/blog/Posts'
import Tags from '~/components/blog/Tags'

export default {
  name: 'Blog',
  components: {
    Posts,
    Tags
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixins/breakpoints.scss';

  .blog {
    @include sm {
      padding: 80px 40px;
    }
  }
</style>
