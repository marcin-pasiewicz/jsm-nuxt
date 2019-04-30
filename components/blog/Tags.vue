<template>
  <ul class="tags tags-filters flex no-list center-xs flex-wrap py-20">
    <li v-for="index in 5" :key="index" class="tag bg-secondary cl-white bold py-10 px-20 m-10">
      #loremipsum
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tags'
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';

  .tag {
    cursor: pointer;

    @include xs {
      margin: 5px;
      padding: 10px;
      box-sizing: border-box;
      max-width: calc(50% - 10px);
    }

    &:hover,
    &.active {
      background: map-get($colors, gold);
      transition: all .25s ease;
    }
  }
</style>
