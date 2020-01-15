<template>
  <a class="book" :href="link">
    <img class="img" v-bind="$attrs">
    <div v-if="title" class="book__info">
      <h2 class="book__title">{{ title }}</h2>
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
    "link"
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
  padding: 0 5px;
  margin-bottom: 2.5rem;
  color: white;
  transition: all .42s $easeInOutCubic;

  &:hover {
    z-index: 100;
    transform: scale(1.15) translateY(-20px);

    img {
      box-shadow: 0 30px 40px -10px rgba(black, .8);
    }

    .book__info {
      opacity: 1;
      bottom: -20px;
    }
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    width: calc(100% - 10px);
    height: 1px;
    border-radius: 0 0 2px 2px;
    background-color: rgba(#666, .7);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    width: calc(100% - 10px);
    height: 3px;
    border-radius: 0 0 2px 2px;
    background-color: rgba(#aaa, .7);
  }

  &__info {
    width: calc(100% - 10px);
    opacity: 0;
    position: absolute;
    bottom: -19px;
    transition: all .5s $easeInOutCubic;
    transition-delay: .1s;
  }

  &__title {
    text-align: center;
    font-weight: 500;
    font-size: .9rem;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 2px;
    transition: all .5s $easeInOutCubic;
    box-shadow: 0 10px 5px -7px rgba(black, .6);
  }
}
</style>