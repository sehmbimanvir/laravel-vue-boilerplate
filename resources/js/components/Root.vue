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
      let message = response.data.message
      if (response.status === 401) {
        this.$store.commit('AuthStore/UNSETUSER')
        this.$router.push({ name: 'Login' })
      } else if (response.status === 422) {
        let firstKey = Object.keys(response.data.data)[0]
        message = response.data.data[firstKey][0]
      }
      this.$toast.error({ title: 'Error', message: message })
    }
  }
}
</script>
