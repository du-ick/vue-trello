<template>
  <header class="header">
    <router-link to="/" class="btn-home">Home</router-link>
    <a href="" v-if="isAuth" @click.prevent="logout">LogOut</a>
    <router-link v-else to="/login" class="btn-login">Login</router-link>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isAuth'
    ]),
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    logout() {
      this.LOGOUT()
      this.$router.push('/login')
    }
  }
}
</script>

