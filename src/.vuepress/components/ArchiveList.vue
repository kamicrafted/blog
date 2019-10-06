<script>
export default {
  name: "ArchiveList",
  props: {
    pages: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
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
            // check if tags contain any of the selected tags
            // const hasTags = item.frontmatter.tags && item.frontmatter.tags.some(tag => this.selectedTags.includes(tag))
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
    }
  },
  methods: {
    getYears: function() {
      return [
        ...new Set(
          this.filteredList.map(item =>
            new Date(item.frontmatter.date).getFullYear()
          )
        )
      ];
    },

    getMonths: function(year) {
      return [
        ...new Set(
          this.filteredList
            .filter(
              item => new Date(item.frontmatter.date).getFullYear() == year
            )
            .map(item => new Date(item.frontmatter.date).getMonth())
        )
      ];
    },

    postsByDate(year, month) {
      return this.filteredList.filter(item => {
        const date = new Date(item.frontmatter.date);
        return date.getFullYear() == year && date.getMonth() == month;
      });
    }
  },
  filters: {
    // Filter definitions
    monthToLongName(value) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return months[value];
    }
  }
};
</script>

<template>
  <div class="archive">
    <div class="archive__group-year" v-for="year in getYears()">
      <div class="archive-year">{{year}}</div>
      <div v-for="month in getMonths(year)">
        <div class="archive-month">{{month | monthToLongName}}</div>
        <ul class="archive-list">
          <li v-for="(item, index) in postsByDate(year, month)" class="archive-list__item">
            <span class="archive-list__date">{{new Date(item.frontmatter.date).getDate()}}</span> -
            <router-link :to="item.path">{{item.title}}</router-link>

            <p class="archive-list__excerpt">
              {{item.frontmatter.excerpt}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../theme/styles/app.scss";

.archive {
  &__group-year {
    position: relative;
    padding-left: 100px;
    margin-bottom: 100px;

    &:last-child {
      margin-bottom: 0;
    }

    .archive-year {
      margin-left: -16px;
      font-size: 1em;
      color: lighten($color-bg, 25%);

      &:after {
        content: '';
        position: absolute;
        top: 30px;
        left: 100px;
        width: 2px;
        height: 100%;
        background-color: lighten($color-bg, 25%);
      }

      &:before {
        content: '';
        position: absolute;
        bottom: -30px;
        left: 97px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: lighten($color-bg, 25%);
      }
    }
  }
}

.archive-list {
  padding: 0;
  margin: 0;

  &__date {
    font-weight: bold;
  }

  &__item {
    position: relative;
    margin: 0 0 50px 32px;
    list-style-type: none;

    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: -35px;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: white;
    }
  }

  &__excerpt {
    margin-top: 0;
    opacity: .8;
  }
}

.archive-year {
  font-weight: bold;
  font-size: 32px;
  margin: 0 0 16px 0;
}

.archive-month {
  font-weight: bold;
  font-size: 24px;
  margin: 0 0 16px 16px;
}

@media (max-width: $MQMobile) {
  .archive {
    &__group-year {
      padding-left: 0;

      .archive-year {
        &:after {
          left: 0;
        }
      }
    }
  }
}
</style>
