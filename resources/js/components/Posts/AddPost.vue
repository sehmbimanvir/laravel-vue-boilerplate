<template>
  <b-container>
    <h1>Add New Post</h1>
    <b-row>
      <b-col>
        <b-form @submit="savePost">
          <b-form-group>
            <b-form-input placeholder="Title" type="text" v-model="post.title" />
          </b-form-group>
          <b-form-group>
            <b-form-textarea placeholder="Description" rows="3" v-model="post.description" />
          </b-form-group>
          <b-button type="submit" variant="info">Save</b-button>
          <b-button :to="{ name: 'ListPost' }" variant="outline-warning">Cancel</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { Post } from '../../services/post'
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
      Post.show(this.routeId).then(response => {
        this.post = response.data.data
      })
    }
  },
  methods: {
    savePost (event) {
      event.preventDefault()
      let promise = new Promise(resolve => {
        if (!this.routeId) {
          Post.store(this.post).then(response => {
            resolve(response.data)
          })
        } else {
          Post.update(this.post, this.routeId).then(response => {
            resolve(response.data)
          })
        }
      })
      promise.then(response => {
        this.$bvToast.toast(response.message, {
          title: 'Success',
          variant: 'success',
          solid: true
        })
        this.$router.push({ name: 'ListPost' })
      })
    }
  }
}
</script>
