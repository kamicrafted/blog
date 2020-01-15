<template>
  <div class="reading">
    <div class="reading__cover" v-if="cover">
      <img :src="cover" alt="">
    </div>
    <div class="reading__info">
      <h4 class="reading__title">{{ title }}</h4>
      <span class="reading__author"><span class="by">by</span> {{ author }}</span>
      <p class="reading__excerpt">
        {{ excerpt }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },

  props: ["title", "author", "cover", "excerpt"]
}
</script>

<style lang="scss" scoped>
@import "../theme/styles/app";

.reading {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 15px 10px 10px;
  margin-top: 25px;
  background-color: lighten($color-bg, 10%);
  border-radius: 4px;
  box-shadow: 0 10px 20px -10px rgba(black, .15), inset 0 1px 0 rgba(white, .07), inset 0 -1px 0 rgba(black, .5);

  &:after {
    content: 'Currently reading';
    position: absolute;
    right: 5px;
    top: -13px;
    width: auto;
    height: auto;
    padding: 5px 10px;
    background-color: darken($color-bg, 5%);
    color: rgba(white, .75);
    border-radius: 2px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__cover {
    flex: 1 0 auto;
    max-width: 120px;
    margin-right: 20px;

    img {
      display: block;
      box-shadow: 0 2px 5px rgba(black, .5)
    }
  }

  &__title {
    font-size: 22px;
    font-weight: bold;
    margin: 0;
  }

  &__author {
    font-size: 16px;

    .by {
      font-style: italic;
      font-size: 14px;
    }
  }

  &__excerpt {
    font-size: 16px;
    line-height: 1.5;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>