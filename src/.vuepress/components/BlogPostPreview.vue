<script>
import feather from 'feather-icons';

export default {
  name: "BlogPostPreview",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    featherReplace: function () {
      feather.replace()
    },
    clickedTag: function (tag) {
      this.$emit('tagSelected', {tag: tag})
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
  },
  mounted () {
    this.featherReplace()
  }
};
</script>

<template>
  <section class="preview">
    <div class="preview__header">
      <div class="preview__header-left">
        <time class="preview__timestamp">{{ formatPublishDate }}</time>
        <router-link class="link-title" :to="item.path">
          <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
        </router-link>
      </div>

      <div class="preview__header-right">
        <p class="read-time" v-if="$page.readingTime">
          <i class="icon icon-watch" data-feather="watch"></i>
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

    <ul class="preview__tags">
      <li v-for="tag in item.frontmatter.tags" class="preview__tag">
        <button @click="clickedTag(tag)">{{ tag }}</button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import "../theme/styles/app";

.preview {
  padding-bottom: 30px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__header-right {
    position: relative;
    bottom: 8px;
  }

  &__timestamp {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    opacity: .5;
  }

  &__tags {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;
    list-style-type: none;
  }

  &__tag {
    cursor: pointer;
  }
}

.blog-post__button {
  margin-bottom: 1.5rem;
  display: inline-block;
}

.blog-post__title {
  font-weight: normal;
  margin-top: 0.5rem;
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
