<template>
  <div class="container">
    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
      <h2>
        <strong>Register</strong>
        <hr>
      </h2>
      <form>
        <div class="form-group">
          <label for="email">Registered Email ID</label>
          <input
            v-model="forgotPassword.email"
            type="email"
            id="email"
            class="form-control input-sm"
          >
        </div>
        <button class="btn btn-primary" type="button">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      forgotPassword: {
        email: null
      }
    }
  },
  computed: {},
  methods: {
    onSubmit () {
      alert('ABC')
    }
  }
}
</script>
