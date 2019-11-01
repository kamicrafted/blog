<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__signoff">&copy; {{ currentYear }} Kamicrafted. All rights reserved.</div>
      <div class="footer__social">
        <a href="http://kamicrafted.com/"><i class="icon icon-globe" data-feather="globe"></i></a>
        <a href="https://github.com/kamicrafted/"><i class="icon icon-github" data-feather="github"></i></a>
        <a href="https://instagram.com/kamicrafted"><i class="icon icon-instagram" data-feather="instagram"></i></a>
        <a href="https://facebook.com/rasterboy"><i class="icon icon-facebook" data-feather="facebook"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
import feather from 'feather-icons';

export default {
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
@import '../styles/app';

.footer {
  background-color: darken($color-bg, 10%);

  &__signoff {
    font-size: 16px;
    color: lighten($color-bg, 40%);
  }

  &__social {
    position: relative;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;

    .icon {
      position: relative;
      top: 4px;
      margin-left: 12px;
      width: 20px;
      color: lighten($color-bg, 40%);
      transition: all .15s $easeInOutQuad;
      cursor: pointer;

      &:hover {
        color: $color-primary;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .footer {
    &__inner {
      flex-direction: column;
    }

    &__signoff {
      margin-bottom: 25px;
    }
  }
}
</style>
