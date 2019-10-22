<template>
  <div class="theme-container view-error" 
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" slot="top" />
      <slot name="sidebar-bottom" slot="bottom" />
    </Sidebar>

    <div class="content">
      <div class="message">
        <h1 class="headline">Page not found</h1>
        <p>{{ getMsg() }}</p>
        <router-link to="/">Return home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import { resolveSidebarItems } from "./util";

const msgs = [
  `There's nothing here.`,
  `How did we get here? 🤔`,
  `Yikes, that's not supposed to happen.`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  components: {
    Sidebar,
    Navbar
  },

  data() {
    return {
      isSidebarOpen: false,
      swUpdateEvent: null
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },

  mounted() {
    
  },

  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },

    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },

    onSWUpdated(e) {
      this.swUpdateEvent = e;
    }
  }
}
</script>

<style lang="scss">
  @import 'styles/app';

  html, body,
  #app, .theme-container,
  .content {
    height: 100%;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>