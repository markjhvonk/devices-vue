<template>
  <div>
      <app-header></app-header>
      <section class="main-section section">
        <div class="container content">
          <router-view></router-view>
        </div>
      </section>
      <app-footer></app-footer>
    </div>
</template>
<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
}
</script>
<style lang="scss">
$primary: hsl(48, 100%, 67%);
@import '~bulma';

.columns {
  flex-wrap: wrap;
}

.device {
  a {
    // margin: 5px 10px;
  }
  .on {
    color: $yellow;
  }
  .off {
    color: $dark;
  }
}
</style>


