<template>
  <div class="gallery">
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: "photo-gallery",

  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },

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

</style>
