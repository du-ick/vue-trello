<template>
  <div class="login-wrap">
    <h2>Log in</h2>
    <form @submit.prevent="onSubmit">
      <div class="inp-item">
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" v-model="email" autofocus placeholder="e.g., test@test.com" />
      </div>
      <div class="inp-item">
        <label for="password">Passwrod</label>
        <input class="form-control" type="password" v-model="password" placeholder="123123" />
      </div>
      <div class="btn-wrap">
        <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit" :disabled="invalidForm">Log In</button>
      </div>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>

import { auth, setAuthInHeader } from '../../api/index';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    onSubmit() {
      auth.login(this.email, this.password)
        .then(data => {
          localStorage.setItem('token', data.accessToken)
          setAuthInHeader(data.accessToken)
          this.$router.push(this.rPath)
        })
        .catch(err => {
          this.error = err.data.error
        })
    }
  }
}
</script>
