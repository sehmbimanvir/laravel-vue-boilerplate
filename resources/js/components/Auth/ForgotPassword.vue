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
            <label for="email">Registered Email ID</label>
            <input
              v-model="forgotPassword.email"
              type="email"
              id="email"
              class="form-control input-sm"
            >
          </div>
          <button @click="forgot()" class="btn btn-primary" type="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      forgotPassword: {
        email: null
      }
    }
  },
  methods: {
    forgot () {
      this.$store.dispatch('AuthStore/sendResetPasswordLink', this.forgotPassword).then(response => {
        this.forgotPassword.email = null
        this.$toast.success({ title: 'Success', message: response.data.message })
      })
    }
  }
}
</script>
