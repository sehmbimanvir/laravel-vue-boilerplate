<template>
  <b-container>
    <b-row class="mb-3">
      <b-col lg="6" md="6" sm="6" offset-lg="3" offset-md="3" offset-sm="3">
        <h2>Reset Password</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="6" md="6" sm="6" offset-lg="3" offset-md="3" offset-sm="3">
        <b-form @submit="reset">
          <b-form-group label="Registered Email Id" label-for="email">
            <b-form-input id="email" type="email" v-model="resetPasswordData.email" />
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input id="password" type="password" v-model="resetPasswordData.password" />
          </b-form-group>

          <b-form-group label="Confirm Password" label-for="password_confirmation">
            <b-form-input id="password_confirmation" type="password" v-model="resetPasswordData.password_confirmation" />
          </b-form-group>

          <b-button type="submit" variant="info">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="6" md="6" sm="6" offset-lg="3" offset-md="3" offset-sm="3">
        <h6>
          <router-link :to="{name: 'Login'}">&laquo; Back To Login</router-link>
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
      resetPasswordData: {
        email: null,
        password: null,
        password_confirmation: null,
        token: this.$route.params.token
      }
    }
  },
  methods: {
    ...mapActions('AuthStore', [
      'resetPassword'
    ]),
    reset (event) {
      event.preventDefault()
      this.resetPassword(this.resetPasswordData).then(response => {
        this.$bvToast.toast(response.data.message, {
          title: 'Success',
          variant: 'success',
          solid: true
        })
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>
