<template>
  <div :class="{ zoomed }" @click="zoomed = true">
    <img class="img" v-bind="$attrs">
    <p v-if="title" class="caption">
      <i class="icon icon-caption" data-feather="message-square"></i>
      {{ title }}
    </p>
  </div>
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

  props: ["title"],

  methods: {
    featherReplace: function () {
      feather.replace()
    },

    closeImage () {
      this.zoomed = false;
    },

    keyCatch (e) {
      if (e.key == "Escape") {
        this.closeImage();
        console.log('esc key pressed');
      }
    }
  },

  watch: {
    zoomed (zoomed) {
      this.$nextTick(() => {
        if (zoomed) {
          // clone image
          this.cloned = this.$el.cloneNode(true)
          this.cloned.className = ""
          this.cloned.classList.add('zoom-clone', 'zoomed');

          // close when clicking image or close button
          this.imgRef = this.cloned.querySelector('.img')

          this.imgRef.addEventListener('click', this.closeImage)
          this.cloned.addEventListener('click', this.closeImage)

          // attach clone to DOM
          document.body.appendChild(this.cloned)
          // prevent scrolling while zoomed
          document.body.style.overflow = 'hidden'

          setTimeout(() => {
            this.cloned.style.opacity = 1
            this.imgRef.style.transform = "scale(1)"
          }, 0)
        } else {
          // unzoom image
          this.cloned.style.opacity = 0
          this.imgRef.style.transform = "scale(.5)"

          setTimeout(() => {
            this.cloned.remove()
            this.cloned = null

            document.body.style.overflow = 'auto'
          }, 300)
        }
      })
    }
  },

  mounted () {
    let self = this;

    this.featherReplace();
    
    window.addEventListener('keyup', function(e) {
        self.keyCatch(e); // declared in your component methods
    });
  }
  
}
</script>

<style lang="scss" scoped>
@import "../theme/styles/app";

body > .zoomed {
  display: block;
}

.zoom {
  position: relative;
  transition: all 0 ease-out;
  cursor: zoom-in;

  > img {
    transition: all .15s ease-out;
    display: block;
  }
}

.caption {
  display: flex;
  padding: 6px 10px;
  margin: 0 0 30px 0;
  align-items: center;
  background-color: rgba(darken($color-bg, 10%), .5);
  border-radius: 0 0 4px 4px;
  font-size: 14px;

  .icon {
    width: 16px;
    margin-right: 5px;
    opacity: .5;
  }
}

.zoom-clone {
  position: fixed;
  transition: all .3s $easeInOutQuad;
  opacity: 0;
  cursor: zoom-in;

  > img {
    border-radius: 4px;
    box-shadow: 0 60px 80px -20px rgba(black, 1);
    transition: all .3s $easeInOutQuad;
    transform: scale(.5);
  }

  &.zoomed {
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(black, .6);
    display: flex;
    align-items: center;
    opacity: 0;
    padding-bottom: 0 !important;
    cursor: default;

    > img {
      width: 100%;
      max-width: 1200px;
      max-height: 100%;
      object-fit: contain;
      margin: 0 auto;
      cursor: zoom-out;
    }

    .caption {
      display: none;
    }
  }

  

  img {
    width: 100%;
    height: auto;
  }
}
</style>