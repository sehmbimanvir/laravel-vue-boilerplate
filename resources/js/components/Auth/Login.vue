<template>
  <b-container>
    <b-row>
      <b-col cols="6" offset-md="3">
        <h2>Login</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" offset-md="3">
        <b-form @submit="login">
          <b-form-group label="Email" label-for="email">
            <b-form-input id="email" type="email" v-model="credentials.email"/>
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input id="password" type="password" v-model="credentials.password"/>
          </b-form-group>

          <b-button type="submit" variant="info">Login</b-button>
        </b-form>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" offset-md="3">
        <h6>
          <router-link :to="{ name: 'ForgotPassword' }">Forgot Password ?</router-link>
        </h6>
        <h6>Not Registered Yet ?
          <router-link :to="{name: 'Register'}">Click Here&nbsp;</router-link>to Register
        </h6>
      </b-col>
    </b-row>
  </b-container>
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
    login (event) {
      event.preventDefault()
      this.$store.dispatch('AuthStore/login', this.credentials).then(response => {
        this.$router.push({ name: 'Home' })
      })
    }
  }
}
</script>
