<script>
import feather from 'feather-icons';

export default {
  name: "Photos",
  data() {
    return {
      
    };
  },
  methods: {
    featherReplace: function () {
      feather.replace()
    }
  },
  mounted () {
    this.featherReplace()
  }
};
</script>

<template>
  <div class="page page--wide">
  <div class="photos">
    Photos
  </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/app.scss";

</style>
