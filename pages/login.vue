<template>
  <div>
    <div>Welcome, please login</div>
    <div>
      <input v-model="username" type="text" />
    </div>
    <div>
      <input v-model="password" type="text" />
    </div>
    <div>
      <a href="#">Forget your password?</a>
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
    <div>footer</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  layout: 'blank',
  methods: {
    login() {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('requestLogin', payload)
    },
    forgotPassword() {}
  }
}
</script>
