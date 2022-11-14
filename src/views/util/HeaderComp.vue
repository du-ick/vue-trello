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
          <router-link v-if="isAuth" to="/">LogOut</router-link>
          <router-link v-else to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return !!localStorage.getItem('token')
    }
  }

}
</script>

<style>

</style>