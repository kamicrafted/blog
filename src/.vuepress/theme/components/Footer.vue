<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__signoff">
        &copy; {{ currentYear }} Crafted with
        <img data-v-6d768e7d="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDU3LjkgNTcuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTcuOSA1Ny45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGM0U2Qzt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4LjksNTYuNUM0NC42LDQ1LjIsNTIuNSwzNC45LDU2LjIsMjdjNC4zLTkuMiwwLjYtMjAuNi04LjgtMjQuNEMzNi4zLTEuOSwyOC45LDguNSwyOC45LDguNQoJCVMyMS43LTEuOSwxMC42LDIuNkMxLjIsNi40LTIuNSwxNy44LDEuOCwyN0M1LjUsMzQuOSwxMy4zLDQ1LjIsMjguOSw1Ni41eiIvPgo8L2c+Cjwvc3ZnPgo=" alt="" class="icon-heart">, powered by
        <a data-v-6d768e7d="" href="https://vuejs.org/"><img data-v-6d768e7d="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTYuMzIgMTcwLjAyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQyYjg4Mzt9LmNscy0ye2ZpbGw6IzM1NDk1ZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ288L3RpdGxlPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMjAuODMgMCA5OC4xNiAzOS4yNiA3NS40OSAwIDAgMCA5OC4xNiAxNzAuMDIgMTk2LjMyIDAgMTIwLjgzIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTIwLjgzIDAgOTguMTYgMzkuMjYgNzUuNDkgMCAzOS4yNiAwIDk4LjE2IDEwMi4wMSAxNTcuMDYgMCAxMjAuODMgMCIvPjwvc3ZnPg==" alt="" class="icon-vue"></a>
      </div>
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

    .icon-heart,
    .icon-vue {
      position: relative;
      top: 2px;
      width: 14px;
    }
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
