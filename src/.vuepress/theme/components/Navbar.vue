<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
    <SearchBox v-else-if="$site.themeConfig.search !== false" />

    <router-link :to="$localePath" class="home-link">
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </router-link>

    <div class="links" :style="{
        'max-width': linksWrapMaxWidth + 'px'
      }">
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import AlgoliaSearchBox from "./AlgoliaSearchBox.vue";
import SearchBox from "./SearchBox.vue";
import NavLinks from "./NavLinks.vue";

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="scss" scoped>
@import "../styles/config";

$navbar-vertical-padding: 0.7rem;
$navbar-horizontal-padding: 1.5rem;

.home-link {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar {
  display: flex;
  width: 100%;
  min-height: 60px;
  font-family: $font-headline;
  font-weight: 900;
  justify-content: space-between;
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;
  position: fixed;
  z-index: 500;
  background-image: linear-gradient(
    to bottom,
    darken($color-bg, 7),
    darken($color-bg, 10)
  );
  color: white;
  border-bottom: 1px solid black;

  a,
  span,
  img {
    display: inline-block;
  }

  .sidebar-button {
    position: absolute;
    left: 30px;
    top: 16px;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }

  .site-name {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    position: relative;
  }

  .logo {
    width: 30px;
  }

  .links {
    position:  absolute;
    left: 30px;
    display: flex;
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }

    .nav-links {
      flex: 1;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    flex-direction: row-reverse;
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .sidebar-button {
      display: block;
    }

    .links {
      padding-left: 1.5rem;
    }
  }
}
</style>

