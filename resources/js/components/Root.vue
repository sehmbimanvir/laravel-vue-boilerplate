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
          <li :class="{'active': currentRoute('ListPost')}">
            <router-link :to="{name: 'ListPost'}">Posts</router-link>
          </li>
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
  created () {
  },
  methods: {
    currentRoute (name) {
      return this.$route.name === name
    }
  }
}
</script>
