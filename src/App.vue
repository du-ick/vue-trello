<template>
  <div id="app">
    <Navbar />    
    <router-view id="container"></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavbarComp.vue'

export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
    }
  }
}
</script>

