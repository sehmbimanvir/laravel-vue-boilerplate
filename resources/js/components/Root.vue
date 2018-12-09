<template>
  <div class="app">
    <navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './Navbar'
import { mapGetters } from 'vuex'
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapGetters('AuthStore', ['user']),
    ...mapGetters('MiscStore', ['error'])
  },
  watch: {
    error (error) {
      let response = error.response
      if (response.status === 401) {
        this.$store.commit('AuthStore/UNSETUSER')
        this.$router.push({ name: 'Login' })
      } else if (response.status === 422) {
        console.log('Validation Errors', response.data.data)
      }
      this.$toast.error({
        title: 'Error',
        message: response.data.message
      })
    }
  }
}
</script>
