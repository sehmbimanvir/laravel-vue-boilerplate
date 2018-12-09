<template>
  <b-container>
    <b-row class="mb-3">
      <b-col cols="6" offset-md="3">
        <h2>Reset Password</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" offset-md="3">
        <b-form @submit="reset">
          <b-form-group label="Registered Email Id" label-for="email">
            <b-form-input id="email" type="email" v-model="resetPassword.email"/>
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input id="password" type="password" v-model="resetPassword.password"/>
          </b-form-group>

          <b-form-group label="Confirm Password" label-for="password_confirmation">
            <b-form-input
              id="password_confirmation"
              type="password"
              v-model="resetPassword.password_confirmation"
            />
          </b-form-group>

          <b-button type="submit" variant="info">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" offset-md="3">
        <h6>
          <router-link :to="{name: 'Login'}">&laquo; Back To Login</router-link>
        </h6>
      </b-col>
    </b-row>
  </b-container>
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
    reset (event) {
      event.preventDefault()
      this.$store.dispatch('AuthStore/resetPassword', this.resetPassword).then(response => {
        this.$toast.success({ title: 'Success', message: response.data.message })
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>
