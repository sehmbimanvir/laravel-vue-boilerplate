<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="title">Add New Post</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <form action="" method="post">
          <div class="form-group">
            <input id="title" v-model="post.title" placeholder="Title" type="text" class="form-control">
          </div>
          <div class="form-group">
            <textarea id="description" v-model="post.description" class="form-control" placeholder="Description"/>
          </div>
          <button type="button" class="btn btn-primary" @click="savePost()">Save</button>
          <router-link class="btn btn-warning" :to="{name: 'ListPost'}">Back</router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from '../../services/Http'
export default {
  data () {
    return {
      post: {
        title: null,
        description: null
      },
      routeId: null
    }
  },
  created () {
    if (this.$route.params.id) {
      this.routeId = this.$route.params.id
      HTTP.get(`post/${this.routeId}`).then(response => {
        this.post = response.data.data
      })
    }
  },
  methods: {
    savePost () {
      let promise = new Promise(resolve => {
        if (!this.routeId) {
          HTTP.post('post', this.post).then(response => {
            resolve(response.data)
          })
        } else {
          HTTP.put(`post/${this.routeId}`, this.post).then(response => {
            resolve(response.data)
          })
        }
      })
      promise.then(response => {
        alert(response.message)
        this.$router.push({ name: 'ListPost' })
      })
    }
  }
}
</script>
