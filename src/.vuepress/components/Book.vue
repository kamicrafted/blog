<template>
  <a class="book" :class="'book--' + size" :href="link" target="_blank">
    <div class="book__genre">
      {{ type }}
    </div>
    <div class="book__details">
      <img class="book__img" v-bind="$attrs">
      <div v-if="title" class="book__info">
        <h2 class="book__title">{{ title }}</h2>
      </div>
    </div>
  </a>
</template>

<script>
import feather from 'feather-icons';

export default {
  inheritAttrs: false,

  data () {
    return {
      zoomed: false
    }
  },

  props: [
    "title",
    "link",
    "size",
    "type"
  ],

  methods: {
    featherReplace: function () {
      feather.replace()
    },
  },

  mounted () {
    let self = this;

    this.featherReplace();
  }
  
}
</script>

<style lang="scss" scoped>
@import "../theme/styles/app";

.book {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 300px;
  width: calc(100% / 7);
  padding: 0 10px;
  color: white;
  transition: all .32s $easeInOutQuad;

  &:hover {
    z-index: 100;
    transform: scale(1.15) translateY(-55px);

    img {
      box-shadow: 0 30px 40px -10px rgba(black, .8);
    }

    .book__details {
      opacity: 1;
      bottom: 0;
      padding-bottom: 10px;
    }

    .book__info {
      opacity: 1;
      padding: 10px 0;
      bottom: -40px;
    }

    .book__genre {
      opacity: .7;
      bottom: -52px;
    }
  }

  &__genre {
    position: absolute;
    z-index: -1;
    opacity: 0;
    bottom: 0;
    left: 50%;
    padding: 0;
    // background-color: lighten($color-bg, 30%);
    text-align: center;
    font-family: $font-headline;
    font-size: .7rem;
    font-weight: 500;
    letter-spacing: .5px;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(white, .25);
    color: darken($color-bg, 30%);
    border-radius: 50px;
    transform: translateX(-50%);
    transition-delay: .5s;
    transition: all .4s $easeInOutQuad;
  }

  &__details {
    position: relative;
    width: 100%;

    &:after {
      content: '';
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 3px;
      border-radius: 0 0 2px 2px;
      background-color: rgba(#aaa, .7);
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-self: center;
    text-align: center;
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: -10px;
    width: 100%;
    // opacity: 0;
    transition: all .2s $easeInOutQuad;
    transition-delay: .1s;
  }

  &__title {
    width: 100%;
  }

  &__img {
    display: block;
    width: 100%;
    border-radius: 2px 2px 0 0;
    transition: all .3s $easeInOutQuad;
    box-shadow: 0 10px 5px -7px rgba(black, .6);
  }

  &--sm {
    width: 150px;
  }

  &--md {
    width: 175px;
  }

  &--lg {
    width: 195px;
  }

  &--xl {
    width: 220px;
  }
}
</style>