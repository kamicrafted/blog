<template>
  <div class="gallery">
    <!-- {{ gallery }} -->
    <figure class="photo" :class="photo.style" v-for="(photo, index) in gallery" :key="'photo' + index">
      <!-- <img :src="photo.url" :alt="photo.alt"> -->
      <zoom-image
        class="zoom"
        :src="photo.url"
        :alt="photo.alt"
        :title="photo.caption"
      />
      
      <figcaption v-if="photo.caption">
        <i class="icon icon-caption" data-feather="message-square"></i> {{ photo.caption }}
      </figcaption>
    </figure>
  </div>
</template>

<script>
import feather from 'feather-icons';
import ZoomImage from './ZoomImage';

export default {
  name: "photo-gallery",

  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },

  props: ['gallery'],

  methods: {
    featherReplace: function () {
      feather.replace()
    },

    buildGallery () {
      let photoArray = document.body.querySelectorAll('.zoom')
      console.log(photoArray)
    }
  },

  components: {
    ZoomImage
  },
  
  mounted () {
    this.featherReplace()
    this.buildGallery ()
  }
}
</script>

<style lang="scss" scoped>
@import "../theme/styles/app";

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  figure {
    margin: 0; 
    margin-bottom: 20px;

    &.fullwidth {
      width: 100%;
    }

    &.halfwidth {
      width: calc(50% - 10px);
    }

    &.thirdwidth {
      width: calc(33% - 10px);
    }

    img {
      display: block;
    }
  }

  figcaption {
    display: flex;
    align-items: center;
    background-color: rgba(darken($color-bg, 10%), .5);
    border-radius: 0 0 4px 4px;
    padding: 6px 10px;
    font-size: 14px;

    .icon {
      width: 16px;
      margin-right: 5px;
      opacity: .5;
    }
  }
}
</style>
