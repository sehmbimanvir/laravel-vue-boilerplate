<template>
  <div class="app">
    <navbar />
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from './Shared/Navbar.vue'
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
      this.$bvToast.toast(message, {
        title: 'Error',
        variant: 'danger',
        solid: true
      })
    }
  }
}
</script>
