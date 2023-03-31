<template>
  <header class="header">
    <router-link to="/" class="btn-home">Home</router-link>
    <a href="" v-if="isAuth" @click.prevent="logout">LogOut</a>
    <router-link v-else to="/login" class="btn-login">Login</router-link>
  </header>
</template>

<script>
import { setAuthInHeader } from '../api'

export default {
  computed: {
    isAuth() {
      return !!localStorage.getItem('token')
    }
  },
  methods: {
    logout() {
      delete localStorage.token
      setAuthInHeader(null)
      this.$router.push('/login')
    }
  }

}
</script>

