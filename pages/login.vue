<template>
  <div>
    <div>Welcome, please login</div>
    <div>
      <input type="text" />
    </div>
    <div>
      <input type="text" />
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
      this.$store.dispatch('setAuthentication', true)
      this.$router.replace('/dashboard')
    },
    forgotPassword() {}
  }
}
</script>
