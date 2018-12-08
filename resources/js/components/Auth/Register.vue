<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>
          <strong>Register</strong>
          <hr>
        </h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="register.name" type="text" id="name" class="form-control input-sm">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="register.email"
              type="email"
              name
              id="email"
              class="form-control input-sm"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="register.password"
              required
              type="password"
              id="password"
              class="form-control input-sm"
            >
          </div>
          <div class="form-group">
            <label for="password_confirmation">Confirm Password</label>
            <input
              v-model="register.password_confirmation"
              required
              type="password"
              id="password_confirmation"
              class="form-control input-sm"
            >
          </div>
          <button class="btn btn-primary" @click="onRegister()" type="button">Register</button>
        </form>
        <h4 class="text-center">Already Registered ?
          <router-link :to="{name: 'Login'}">Click Here&nbsp;</router-link>to Login
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      register: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods: {
    onRegister () {
      this.$store.dispatch('AuthStore/register', this.register).then(response => {
        this.$router.push({ name: 'Login', params: { type: 'success', message: response.data.message } })
      })
    }
  }
}
</script>
