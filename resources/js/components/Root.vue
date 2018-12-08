<template>
  <div>
    <navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './Navbar'
export default {
  components: {
    Navbar
  },
  computed: {
    catchError () {
      return this.$store.getters['MiscStore/error']
    },

    user () {
      return this.$store.getters['AuthStore/user']
    }
  },
  watch: {
    catchError (error) {
      let response = error.response
      if (response.status === 401) {
        this.$store.commit('AuthStore/UNSETUSER')
        this.$router.push({ name: 'Login' })
      } else if (response.status === 422) {
        console.log(response.data.data)
      }
      this.$toast.error({
        title: 'Error',
        message: response.data.message
      })
    }
  }
}
</script>
