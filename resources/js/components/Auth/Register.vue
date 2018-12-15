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
            <b-form-input required id="name" type="text" v-model="user.name"/>
          </b-form-group>

          <b-form-group label="Email" label-for="email">
            <b-form-input required id="email" type="email" v-model="user.email"/>
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input required id="password" type="password" v-model="user.password"/>
          </b-form-group>

          <b-form-group label="Confirm Password" label-for="password_confirmation">
            <b-form-input
              required
              id="password_confirmation"
              type="password"
              v-model="user.password_confirmation"
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods: {
    ...mapActions('AuthStore', [
      'register'
    ]),
    onRegister (event) {
      event.preventDefault()
      this.register(this.user).then(response => {
        this.$toast.success({
          title: 'Success',
          message: response.data.message
        })
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>
