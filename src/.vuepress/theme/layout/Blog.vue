<template>
  <div class="post">
    <div v-if="$frontmatter.heroImage" class="hero hero--fullwidth">
      <div class="hero__scrim"></div>
      <div class="hero__image">
        <img :src="$frontmatter.heroImage" class="hero__artwork" alt />
      </div>
      <div class="blog__header" :class="($frontmatter.type === 'gallery') ? 'blog__header--gallery' : 'blog__header'">
        <p class="publish-date">
          <time :datetime="$frontmatter.date">{{ publishDate }}</time>
        </p>

        <h1 class="blog__title">{{ $page.title }}</h1>

        <p class="read-time" v-if="$page.readingTime && $frontmatter.type != 'gallery'">
          <i class="icon icon-watch" data-feather="watch"></i>
          {{ $page.readingTime.text }}
        </p>

        <p class="read-time" v-else>
          <i class="icon icon-camera" data-feather="camera"></i>
          <span>Photo story</span>
        </p>
      </div>
    </div>

    <div :class="($frontmatter.type === 'gallery') ? ['blog', 'gallery'] : 'blog'">
      <div v-if="!$frontmatter.heroImage" class="blog__header">
        <p class="publish-date">
          <time :datetime="$frontmatter.date">{{ publishDate }}</time>
        </p>
        <h1 class="blog__title">{{ $page.title }}</h1>
        <p class="read-time" v-if="$page.readingTime">
          <i class="icon icon-watch" data-feather="watch"></i>
          {{ $page.readingTime.text }}
        </p>
      </div>

      <Content class="custom" />

      <div class="page-edit">
        <div class="edit-link" v-if="editLink">
          <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
          <OutboundLink />
        </div>
        <div class="last-updated" v-if="lastUpdated">
          <span class="prefix">{{ lastUpdatedText }}:</span>
          <time class="time" :datetime="$page.lastUpdated">{{ lastUpdated }}</time>
        </div>
      </div>

      <div class="page-nav" v-if="prev || next">
        <p class="inner">
          <span v-if="prev" class="prev">
            ←
            <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
          </span>

          <span v-if="next" class="next">
            <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>→
          </span>
        </p>
      </div>

      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
import { resolvePage, normalize, outboundRE, endingSlashRE } from "../util";
import feather from 'feather-icons';

export default {
  name: "Blog",

  props: ["sidebarItems"],

  computed: {
    lastUpdated() {
      if (this.$page.lastUpdated) {
        const dateFormat = new Date(this.$page.lastUpdated);

        const options = {
          year: "numeric",
          month: "long",
          day: "numeric"
        };

        return `${dateFormat.toLocaleDateString(
          this.$lang,
          options
        )}, ${dateFormat.toLocaleTimeString(this.$lang)}`;
      }
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    prev() {
      const prev = this.$page.frontmatter.prev;
      if (prev === false) {
        return;
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path);
      } else {
        return resolvePrev(this.$page, this.sidebarItems);
      }
    },

    next() {
      const next = this.$page.frontmatter.next;
      if (next === false) {
        return;
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path);
      } else {
        return resolveNext(this.$page, this.sidebarItems);
      }
    },

    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return;
      }
      const {
        repo,
        editLinks,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;

      let path = normalize(this.$page.path);
      if (endingSlashRE.test(path)) {
        path += "README.md";
      } else {
        path += ".md";
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path);
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    },

    publishDate() {
      const dateFormat = new Date(this.$frontmatter.date);
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
    },
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/${docsBranch}` +
          (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      return (
        base.replace(endingSlashRE, "") +
        `/edit/${docsBranch}` +
        (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
        path
      );
    }
  },
  mounted () {
    this.featherReplace()
  }
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

function find(page, items, offset) {
  const res = [];
  items.forEach(item => {
    if (item.type === "group") {
      res.push(...(item.children || []));
    } else {
      res.push(item);
    }
  });
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === page.path) {
      return res[i + offset];
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_config.scss";

.blog {
  @extend .wrapper;

  &__header {
    padding-top: 4.6rem;
  }

  &__title {
    font-weight: normal;
    margin-top: 0;
  }
}

.post {
  padding-top: 50px;
}

.publish-date {
  margin-bottom: 0.5rem;
}

.page-edit {
  @extend .wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0;
  padding-right: 0;
  overflow: auto;

  .edit-link {
    display: inline-block;

    a {
      color: lighten($color-text, 25%);
      margin-right: 0.25rem;
    }
  }

  .last-updated {
    float: right;
    font-size: 0.9em;

    .prefix {
      font-weight: 500;
      color: lighten($color-text, 25%);
    }

    .time {
      font-weight: 400;
      color: #aaa;
    }
  }
}

.page-nav {
  padding-top: 1rem;
  padding-bottom: 0;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    border-top: 1px solid $borderColor;
    padding-top: 1rem;
    overflow: auto; // clear float
  }

  .next {
    float: right;
  }
}

.gallery {
  max-width: $customWidth;
}

@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }

    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .blog__title {
    font-size: 2.441rem;
  }
}
</style>
