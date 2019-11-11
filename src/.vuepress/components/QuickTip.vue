<template>
  <div class="quicktip">
    <i class="icon icon-tip" data-feather="alert-triangle"></i>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  data () {
    return {
      
    }
  },

  props: ["message"],

  methods: {
    featherReplace: function () {
      feather.replace()
    },
  },

  mounted () {
    this.featherReplace()
  }
}
</script>

<style lang="scss" scoped>
@import "../theme/styles/app";

.quicktip {
  position: relative;
  margin-bottom: 30px;
  padding: 10px 15px 10px 55px;
  border: 2px solid rgba($color-secondary, .1);
  border-radius: 4px;
  font-size: 16px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 100%;
    background-color: rgba($color-secondary, .1);
  }

  .icon {
    position: absolute;
    z-index: 10;
    left: 10px;
    top: 50%;
    color: rgba(white, .5);
    transform: translateY(-50%);
  }

  p {
    margin: 0;
  }
}
</style>