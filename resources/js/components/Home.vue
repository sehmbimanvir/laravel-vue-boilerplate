<template>
  <div class="container">
    <h1>Vue + Laravel Boilerplate</h1>
    <template v-if="isLoggedIn">
      <h3>Welcome, {{ user.name }}</h3>
      <button type="button">Click Here</button>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters('AuthStore', [
      'user', 'isLoggedIn'
    ])
  },
  created () {
  },
  methods: {
  }
}
</script>
