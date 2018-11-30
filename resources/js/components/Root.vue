<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" :to="{name: 'Home'}">Vue + Laravel</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li :class="{'active': currentRoute('Home')}">
            <router-link :to="{name: 'Home'}">Home</router-link>
          </li>
          <li :class="{'active': currentRoute('About')}">
            <router-link :to="{name: 'About'}">About</router-link>
          </li>
          <template v-if="!isLoggedIn">
            <li :class="{'active': currentRoute('Login')}">
              <router-link :to="{name: 'Login'}">Login</router-link>
            </li>
          </template>
          <template v-else>
            <li>
              <router-link :to="{ name: 'ListPost' }">Posts</router-link>
            </li>
            <li>
              <a href="javascript:void(0);" @click="logout()">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    catchError () {
      return this.$store.getters['MiscStore/error']
    },
    isLoggedIn () {
      return this.$store.getters['AuthStore/isLoggedIn']
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
        this.$router.push({ name: 'Login', params: { message: 'Unauthorized' } })
      } else {
        console.log('Error', response)
      }
    }
  },
  created () {
  },
  methods: {
    currentRoute (name) {
      return this.$route.name === name
    },
    logout () {
      this.$store.dispatch('AuthStore/logout').then(response => {
        this.$router.push({
          name: 'Login',
          params: {
            type: 'success',
            message: response.data.message
          }
        })
      })
    }
  }
}
</script>
