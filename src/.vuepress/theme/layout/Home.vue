<template>
  <div class="content default asdfas">
    <BlogPostList
      :pages="$site.pages"
      :page-size="$site.themeConfig.pageSize"
      :start-page="$site.themeConfig.startPage"
    />

    <div class="footer" v-if="data.footer">{{ data.footer }}</div>
  </div>
</template>

<script>
import NavLink from "../components/NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/app";

body {
  position: relative;

  &:after {
    content: '';
    position: fixed;
    z-index: -1;
    top: 0;
    left: 50%;
    width: 100%;
    height: 1400px;
    background-image: radial-gradient(
      circle at top center,
      rgba(lighten($color-bg, 10%), .5),
      darken($color-bg, 10%)
    );
    transform: translateX(-50%);
  }
}
</style>