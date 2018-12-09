<template>
  <b-container>
    <h2>{{ user.name }}'s Profile</h2>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters('AuthStore', ['user'])
  },
  created () {
  },
  methods: {
  }
}
</script>
