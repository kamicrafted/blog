<script>
export default {
  name: "BlogPostPreview",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.item.frontmatter.date);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      return dateFormat.toLocaleDateString("en-US", options);
    }
  }
};
</script>

<template>
  <section class="preview">
    <div class="preview__header">
      <div class="preview__header-left">
        <time>{{ formatPublishDate }}</time>
        <router-link class="link-title" :to="item.path">
          <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
        </router-link>
      </div>

      <div class="preview__header-right">
        <p class="read-time" v-if="$page.readingTime">
          <img class="icon icon-watch" src="../theme/assets/watch.svg" alt />
          {{ $page.readingTime.text }}
        </p>
      </div>
    </div>

    <div v-if="item.frontmatter.heroImage" class="hero hero--preview">
      <div class="hero__scrim"></div>
      <router-link class="hero__image" :to="item.path">
        <img :src="item.frontmatter.heroImage" class="hero__artwork" alt />
      </router-link>
    </div>

    <p v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p>

    <router-link class="button blog-post__button" :to="item.path">Read more</router-link>
  </section>
</template>

<style lang="scss" scoped>
@import "../theme/styles/app";

.preview {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__header-right {
    position: relative;
    bottom: 8px;
  }
}

.blog-post__button {
  margin-bottom: 1.5rem;
  display: inline-block;
}

.blog-post__title {
  margin-top: 0.5rem;
}

.button {
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 0;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;

  &:hover {
    text-decoration: none !important;
  }
}

.tag-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin-bottom: 25px;
}

.tag-list__item {
  margin-left: 10px;
}

.tag-list__item:first-child {
  margin-left: 0;
}

.tag-list__btn {
  padding: 5px;
  font-size: 0.9rem;
  background-color: #fff;
}
</style>
