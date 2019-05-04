<template>
  <div class="posts row">
    <div v-for="index in 15" :key="index" class="col-xs-12 col-sm-6 col-lg-4">
      <div class="post relative no-scroll">
        <router-link :to="'/blog/post/' + index">
          <div class="post-photo cover w-100" :style="{'background-image': 'url(' + require('../../assets/img/workout.jpg') + ')'}" />
          <div class="post-info absolute w-100 p-20 cl-black">
            <h4 class="mt-0 mb-10 uppercase">
              Post title
            </h4>
            <p class="f-s mb-10">
              Imię Autora / 04.03.2019
            </p>
            <ul class="tags flex no-list">
              <li v-for="tag in 3" :key="tag" class="f-xs mr-10 bold">
                #loremipsum
              </li>
            </ul>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts'
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';

  .post {
    margin: 1rem auto;

    &:hover {
      .post-photo {
        backface-visibility: hidden;
        transform: scale(1.1);
      }
    }

    .post-photo {
      filter: grayscale(100%);
      height: 0;
      padding-bottom: 100%;
      transition: all .5s ease-in-out;
    }

    .post-info {
      background: rgba(map-get($colors, gold), 0.9);
      bottom: 0;
      left: 0;
      transition: all .5s ease-in-out;
    }
  }
</style>
