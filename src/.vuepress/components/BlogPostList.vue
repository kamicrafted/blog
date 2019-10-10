<script>
export default {
  name: "BlogPostList",
  props: {
    pages: {
      type: Array,
      default: []
    },
    pageSize: {
      type: Number,
      default: 5
    },
    startPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentPage: Math.ceil(this.startPage / this.pageSize),
      selectedTags: []
    };
  },
  computed: {
    filteredList() {
      if (this.pages) {
        return this.pages
          .filter(item => {
            const isBlogPost = !!item.frontmatter.blog;
            const isReadyToPublish =
              new Date(item.frontmatter.date) <= new Date();
            // check for locales
            let isCurrentLocale = true;
            if (this.$site.locales) {
              const localePath = this.$route.path.split("/")[1] || "";
              isCurrentLocale = item.relativePath.startsWith(localePath);
            }
            // check if tags contain all of the selected tags
            const hasTags =
              !!item.frontmatter.tags &&
              this.selectedTags.every(tag =>
                item.frontmatter.tags.includes(tag)
              );

            if (
              !isBlogPost ||
              !isReadyToPublish ||
              (this.selectedTags.length > 0 && !hasTags) ||
              !isCurrentLocale
            ) {
              return false;
            }

            return true;
          })
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      }
    },

    totalPages() {
      return Math.ceil(this.filteredList.length / this.pageSize);
    }
  },

  mounted() {
    this.currentPage = Math.min(
      Math.max(this.currentPage, 0),
      this.totalPages - 1
    );
  },

  methods: {
    nextPage() {
      this.currentPage =
        this.currentPage >= this.totalPages - 1
          ? this.totalPages - 1
          : this.currentPage + 1;
    },
    previousPage() {
      this.currentPage = this.currentPage < 0 ? 0 : this.currentPage - 1;
    },
    handleTagSelected (tag) {
      // console.log(tag.tag)
      this.addTag(tag.tag)
    },
    addTag(tag) {
      const tagExists = this.selectedTags.some(item => {
        return item === tag;
      });

      if (!tagExists) {
        this.selectedTags = this.selectedTags.concat(tag);
      }
    },
    removeTag(tag) {
      this.selectedTags.filter(t => t != tag);
    },
    resetTags() {
      this.selectedTags = [];
    }
  }
};
</script>

<template>
  <div>
    <!-- Show active filters -->
    <div v-if="selectedTags.length > 0" class="filtered-heading">
      <h2><span>Posts tagged as </span> {{ selectedTags.join(', ') }}</h2>
      <button type="button" @click="resetTags" class="button button--clear">Clear filters</button>
    </div>
    
    <ul class="blog-list">
      <li v-for="(item, index) in filteredList" class="blog-list__item">
        <BlogPostPreview
          v-show="index >= currentPage * pageSize && index < (currentPage + 1) * pageSize"
          :item="item" @tagSelected="handleTagSelected"
        />
      </li>
    </ul>

    <div class="pagination">
      <button
        v-show="currentPage > 0"
        @click="previousPage"
        class="button button--pagination"
        type="button"
      >Previous</button>
      <button
        v-show="currentPage < totalPages - 1"
        @click="nextPage"
        class="button button--pagination"
        type="button"
      >Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../theme/styles/app';

.blog-list {
  padding: 0;
  margin: 0;
}

.clear-filter-btn {
  align-self: center;
  margin-left: 20px;
}

.filtered-heading {
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid lighten($color-bg, 10%);

  h2 {
    margin: 0 auto 0 0;
    padding: 0;
    border-bottom: 0;
  }

  span {
    font-weight: normal;
  }
}

.pagination {
  text-align: center;
}
</style>