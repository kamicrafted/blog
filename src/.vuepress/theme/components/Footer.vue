<template>
  <footer class="footer">
    <div class="content">
      <div class="signoff">&copy; {{ currentYear }} Kamicrafted. All rights reserved.</div>
    </div>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

footer {
  background-color: darken($color-bg, 20%);

  .content {
    padding: 0;
  }

  .signoff {
    font-size: 16px;
  }

  .social {
    position: relative;
  }
}
</style>
