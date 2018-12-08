<template>
  <nav class="navbar navbar-expand-sm bg-dark mb-2">
    <router-link :to="{name: 'Home'}" class="navbar-brand">Laravel + Vue</router-link>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" :class="{'active': currentRoute('Home')}">
        <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item" :class="{'active': currentRoute('About')}">
        <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
      </li>
      <template v-if="!isLoggedIn">
        <li class="nav-item" :class="{'active': currentRoute('Login')}">
          <router-link class="nav-link" :to="{name: 'Login'}">Login</router-link>
        </li>
      </template>
      <template v-else>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'ListPost' }">Posts</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" @click="logout()">Logout</a>
        </li>
      </template>
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    isLoggedIn () {
      return this.$store.getters['AuthStore/isLoggedIn']
    }
  },
  methods: {
    currentRoute (name) {
      return this.$route.name === name
    },
    logout () {
      this.$store.dispatch('AuthStore/logout').then(response => {
        this.$toast.success({
          title: 'Success', message: response.data.message
        })
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>
