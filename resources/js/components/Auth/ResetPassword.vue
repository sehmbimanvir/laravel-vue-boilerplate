<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>
          <strong>Reset Password</strong>
          <hr>
        </h2>
        <form>
          <div class="form-group">
            <label for="email">Registered Email ID</label>
            <input
              v-model="resetPassword.email"
              type="email"
              id="email"
              class="form-control input-sm"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="resetPassword.password"
              type="password"
              id="password"
              class="form-control input-sm"
            >
          </div>
          <div class="form-group">
            <label for="confirm_password">Confirm Password</label>
            <input
              v-model="resetPassword.password_confirmation"
              type="password"
              id="confirm_password"
              class="form-control input-sm"
            >
          </div>
          <button @click="reset()" class="btn btn-primary" type="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      resetPassword: {
        email: null,
        password: null,
        password_confirmation: null,
        token: this.$route.params.token
      }
    }
  },
  methods: {
    reset () {
      this.$store.dispatch('AuthStore/resetPassword', this.resetPassword).then(response => {
        this.$toast.success({ title: 'Success', message: response.data.message })
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>
