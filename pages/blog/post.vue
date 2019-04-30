<template>
  <div class="post relative center-xs p-80">
    <div class="post-heading content m-auto">
      <h2 class="post-title relative">
        LOREM IPSUM DOLOR
      </h2>
      <h4>
        Imię Autora / 24.03.2019 / #lorempisum #loremipsumipsum
      </h4>
    </div>
    <div class="post-content content align-left m-auto py-20">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus convallis nulla, vel cursus diam rhoncus fringilla. In hac habitasse platea dictumst. Suspendisse condimentum auctor diam, vitae placerat sapien. Integer mollis nisi sodales eleifend fermentum. Quisque efficitur rutrum lacus, et blandit sapien sodales id. Nam eget scelerisque est. Duis a turpis eget metus hendrerit malesuada vitae quis lacus.</p>
      <p><img src="../../assets/img/workout.jpg"></p>
      <p>Sed mattis urna nisl. Phasellus tincidunt volutpat mauris, in mattis tellus commodo vel. Donec euismod, neque at dapibus facilisis, eros libero molestie erat, at feugiat dolor urna id ligula. Aenean vehicula justo eros, ut mollis orci viverra sollicitudin. Phasellus nec dapibus erat. Donec cursus, turpis et mollis semper, libero nibh consequat neque, ut finibus mauris odio et nisl. Suspendisse eget urna eget mauris consectetur eleifend. Sed sodales elementum dolor, scelerisque laoreet ex mollis non. Etiam imperdiet molestie accumsan. Praesent sagittis lectus in molestie convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi orci purus, aliquet vel hendrerit id, tristique porttitor lacus. Sed gravida augue sit amet sem ornare, cursus auctor justo varius. In accumsan sit amet ex eu tincidunt.</p>
      <p>Sed cursus commodo sapien nec mattis. Morbi quis convallis nibh. Nam vel suscipit nisl. Vestibulum luctus tortor ac consectetur viverra. Maecenas posuere ex turpis, in consectetur nisl accumsan at. In hac habitasse platea dictumst. Aliquam sit amet posuere mauris, id eleifend massa. Mauris sollicitudin imperdiet faucibus. Quisque porttitor ex eget lacus congue commodo. Vestibulum nec ullamcorper ligula. Donec et neque vel nisl mollis pulvinar. Sed non condimentum ante, vitae malesuada justo. Aenean a fermentum velit.</p>
      <h3>Lorem ipsum dolor</h3>
      <p>Etiam venenatis rutrum nunc id interdum. Aenean porttitor augue vestibulum tellus laoreet suscipit. Donec eget neque nec lectus semper condimentum vel ac tellus. Etiam eu lorem ultrices, iaculis dui in, viverra tellus. Fusce sollicitudin, dolor a convallis varius, dolor nisl interdum tellus, sit amet lacinia ante lacus a diam. Aenean luctus lectus id dapibus posuere. Mauris elementum tellus finibus, auctor nunc ac, congue elit. Integer a sagittis mi, tincidunt facilisis tortor. In libero magna, fringilla ut velit eget, vehicula laoreet sapien. Nam eleifend blandit aliquet.</p>
      <p><img src="../../assets/img/workout.jpg"></p>
      <p>Integer arcu sem, finibus in placerat eu, facilisis sit amet dui. Quisque venenatis nisi at sem consectetur posuere. Nullam accumsan mattis feugiat. Donec non finibus tellus, in finibus metus. Donec tempor mi eu ante efficitur commodo. Sed magna mauris, scelerisque sit amet auctor eu, vehicula a mi. Nullam ultricies molestie hendrerit. Cras sed mauris quis ex dictum euismod non eu ex. Ut posuere enim vitae massa semper interdum.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';
  @import '~assets/css/mixins/breakpoints.scss';

  .post {
    @include sm {
      padding: 80px 40px;
    }

    .post-title {
        &:after {
          content: '';
          background: map-get($colors, gold);
          display: block;
          height: 2px;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
        }
    }

    .post-content {
      img {
        margin: 20px auto;
        max-width: 100%;
      }
    }
  }
</style>
