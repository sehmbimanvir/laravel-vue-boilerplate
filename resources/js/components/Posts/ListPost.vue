<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <h1 class="title">All Posts</h1>
      </div>
      <div class="col-sm-4 pull-right text-right">
        <router-link :to="{name: 'AddPost'}" class="btn btn-primary">Add Post</router-link>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-bordered table-condensed">
          <thead>
            <tr>
            <th width="5%">ID</th>
            <th width="20%">Title</th>
            <th width="10%">Added On</th>
            <th width="55%">Description</th>
            <th width="10%"/>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(post, index) in posts" :key="index">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.created_on }}</td>
              <td>{{ post.description }}</td>
              <td>
                <router-link :to="{name: 'EditPost', params: {id: post.id}}" class="btn btn-warning btn-xs">Edit</router-link>
                <button @click="deletePost(post.id, index)" class="btn btn-danger btn-xs">Delete</button>
              </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from '../../services/http'
export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      HTTP.get('post').then(response => {
        this.posts = response.data.data
      })
    },
    deletePost (postId, index) {
      let e = confirm('Delete Post. Are you Sure ?')
      if (e) {
        HTTP.delete(`post/${postId}`).then(response => {
          alert(response.data.message)
          this.posts.splice(index, 1)
        })
      }
    }
  }
}
</script>
