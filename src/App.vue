<template>
  <div id="app">
    <Header />
    <div class="base-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from './views/util/HeaderComp.vue';
import Footer from './views/util/FooterComp.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,

  }
}
</script>

<style>
  @import url(./assets/style.css);
</style>