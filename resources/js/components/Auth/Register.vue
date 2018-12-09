<template>
  <b-container>
    <b-row class="pb-3">
      <b-col cols="6" offset-md="3">
        <h2>Register</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" offset-md="3">
        <b-form @submit="onRegister">
          <b-form-group label="Name" label-for="name">
            <b-form-input id="name" type="text" v-model="register.name"/>
          </b-form-group>

          <b-form-group label="Email" label-for="email">
            <b-form-input id="email" type="email" v-model="register.email"/>
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input id="password" type="password" v-model="register.password"/>
          </b-form-group>

          <b-form-group label="Confirm Password" label-for="password_confirmation">
            <b-form-input
              id="password_confirmation"
              type="password"
              v-model="register.password_confirmation"
            />
          </b-form-group>

          <b-button type="submit" variant="info">Register</b-button>
        </b-form>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" offset-md="3">
        <h6>Already Registered ?
          <router-link :to="{name: 'Login'}">Click Here&nbsp;</router-link>to Login
        </h6>
      </b-col>
    </b-row>
  </b-container>
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
    onRegister (event) {
      event.preventDefault()
      this.$store.dispatch('AuthStore/register', this.register).then(response => {
        this.$router.push({ name: 'Login', params: { type: 'success', message: response.data.message } })
      })
    }
  }
}
</script>
