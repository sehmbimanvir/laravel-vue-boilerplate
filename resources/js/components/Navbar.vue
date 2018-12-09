<template>
  <b-navbar toggleable="md" type="dark" class="mb-5" variant="info">
    <b-navbar-toggle target="nav_collapse"/>
    <b-navbar-brand :to="{ name: 'Home' }">Laravel + Vue</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
        <template v-if="!isLoggedIn">
          <b-nav-item :to="{name: 'Login'}">Login</b-nav-item>
        </template>
        <template v-else>
          <b-nav-item :to="{ name: 'ListPost' }">Posts</b-nav-item>
          <b-nav-item-dropdown right>
            <template slot="button-content">{{ user.name }}</template>
            <b-dropdown-item :to="{ name: 'Profile' }">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout()" href="javascript:void(0);">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    ...mapGetters('AuthStore', [
      'user', 'isLoggedIn'
    ])
  },
  methods: {
    toggleNavbar () {
      this.collapsed = !this.collapsed
    },
    currentRoute (name) {
      return this.$route.name === name
    },
    logout () {
      this.$store.dispatch('AuthStore/logout').then(response => {
        this.$toast.success({ title: 'Success', message: response.data.message })
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>
