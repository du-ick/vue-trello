<template>
  <div class="header-wrap">
    <router-link to="/home">
      <h1 class="logo">Header</h1>
    </router-link>
    <nav>
      <ul class="gnb">
        <li>
          <router-link to="/board">Board</router-link>
        </li>
        <li class="login">
          <a v-if="isAuth" href="" @click.prevent="logout" >LogOut</a>
          <router-link v-else to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { setAuthInHeader } from '@/api'
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
      this.$route.push('/login')
    }
  }

}
</script>

<style>

</style>