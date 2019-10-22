<script>
import feather from 'feather-icons';

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
    featherReplace: function () {
      feather.replace()
    },

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
    },
    monthToShortName(value) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      return months[value];
    }
  },
  mounted () {
    this.featherReplace()
  }
};
</script>

<template>
  <div class="archive">
    <div class="archive__group-year" v-for="year in getYears()">
      <div class="archive-year">{{year}}</div>
      <div class="archive__group-month" v-for="month in getMonths(year)">
        <div class="archive-month">{{month | monthToLongName}}</div>
        <ul class="archive-list">
          <li v-for="(item, index) in postsByDate(year, month)" class="archive-list__item">
            <div class="archive-list__header">
              <div class="archive-list__title">
                <i class="icon icon-doc" data-feather="file-text"></i>
                <router-link class="link-title" :to="item.path">{{item.title}}</router-link>
              </div>
              
              <span class="archive-list__date">{{month | monthToShortName}} {{new Date(item.frontmatter.date).getDate()}}</span>
            </div>

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
  padding: 50px;

  &__group-year {
    position: relative;
    padding-left: 100px;
    margin: 0 0 100px -50px;
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

  &__group-month {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 11px;
      left: -3px;
      width: 8px;
      height: 8px;
      background-color: $color-primary;
    }
  }
}

.archive-list {
  padding: 0;
  margin: 0;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__date {
    font-weight: bold;
    font-size: .75em;
    text-transform: uppercase;
    color: lighten($color-bg, 25%);
  }

  &__item {
    position: relative;
    margin: 0 0 50px 32px;
    list-style-type: none;

    &:after {
      content: '';
      position: absolute;
      top: 15px;
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
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 16px;
  color: lighten($color-bg, 40%);
  font-family: $font-headline;
  text-transform: uppercase;
}

.link-title {
  font-family: $font-headline;
}

@media (max-width: $MQMobile) {
  .archive {
    &__group-year {
      padding-left: 0;
      margin-left: 0;

      .archive-year {
        &:after {
          left: 0;
        }

        &:before {
          content: '';
          position: absolute;
          bottom: -30px;
          left: -3px;
          width: 8px;
          height: 8px;
          border-radius: 100%;
          background-color: lighten($color-bg, 25%);
        }
      }
    }
  }
}
</style>
