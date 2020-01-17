<template>
  <div class="bookshelf">
    <!-- <div class="hero">
      <div class="hero__info">
        <h1 class="hero__title">Bookshelf</h1>
        <p class="hero__updated">
          Last updated: <time :datetime="$frontmatter.updated">{{ publishDate }}</time>
        </p>
      </div>
    </div> -->
    <div class="page page--wide page--bookshelf">
        <slot name="top" />
        <Content class="custom" />

        <slot name="bottom" />
    </div>

    <p class="hero__updated">
      Last updated: <time :datetime="$frontmatter.updated">{{ publishDate }}</time>
    </p>
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: "Bookshelf",
  data() {
    return {
      
    };
  },
  computed: {
    publishDate() {
      const dateFormat = new Date(this.$frontmatter.updated);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      return dateFormat.toLocaleDateString(this.$lang, options);
    }
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

<style lang="scss" scoped>
@import "../styles/app.scss";

.bookshelf {
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: darken($color-bg, 10%);

    &__title {
      font-size: 2em;
      font-weight: 500;
      text-align: center;
      margin: 0;
      color: white;
    }

    &__updated {
      text-align: center;
      font-size: .9rem;
      margin: 0 0 50px;
      opacity: .6;
    }
  }
}
</style>
