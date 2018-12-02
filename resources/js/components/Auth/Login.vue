<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
        <h2>
          <strong>Login</strong>
          <hr>
        </h2>
        <form>
          <div class="form-group">
            <label>Email address</label>
            <input
              v-model="credentials.email"
              type="email"
              class="form-control"
              placeholder="Enter email"
            >
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              v-model="credentials.password"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="form-check">
            <button @click="login()" type="button" class="btn btn-primary">Submit</button>
          </div>
        </form>
        <div class="row">
          <div class="col-sm-12">
            <h5>
              <router-link :to="{ name: 'ForgotPassword' }">Forgot Password ?</router-link>
            </h5>
            <h5>Not Registered Yet ?
              <router-link :to="{name: 'Register'}">Click Here&nbsp;</router-link>to Register
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      credentials: {
        email: 'admin@gmail.com',
        password: 'secret'
      }
    }
  },
  created () {
  },
  methods: {
    login () {
      this.$store.dispatch('AuthStore/login', this.credentials).then(response => {
        this.$router.push({ name: 'Home' })
      })
    }
  }
}
</script>
