<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h1>All Posts</h1>
      </b-col>
      <b-col cols="4" class="ml-auto text-right">
        <b-button variant="outline-info" :to="{ name: 'AddPost' }">Add Post</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <b-table striped hover :items="posts" :fields="fields">
          <template slot="actions" slot-scope="data">
            <b-button-group>
              <b-button
                :to="{name: 'EditPost', params: {id: data.item.id}}"
                size="sm"
                variant="warning"
              >Edit</b-button>
              <b-button @click="deletePost(data.item.id)" size="sm" variant="danger">Delete</b-button>
            </b-button-group>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { HTTP } from '../../services/http'
export default {
  data () {
    return {
      posts: [],
      fields: [
        {
          key: 'id',
          label: 'ID'
        }, {
          key: 'title',
          label: 'Title'
        }, {
          key: 'created_on',
          label: 'Added On'
        }, {
          key: 'user.name',
          label: 'Added By'
        }, {
          key: 'description',
          label: 'Desc.'
        }, {
          label: 'Actions',
          key: 'actions'
        }
      ]
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
    deletePost (postId) {
      let e = confirm('Delete Post. Are you Sure ?')
      if (e) {
        HTTP.delete(`post/${postId}`).then(response => {
          let index = this.posts.findIndex(post => post.id === postId)
          this.posts.splice(index, 1)
          this.$toast.success({
            title: 'Success',
            message: response.data.message
          })
        })
      }
    }
  }
}
</script>
