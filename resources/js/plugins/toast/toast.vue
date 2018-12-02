<template>
  <div class="vue-toast" :class="type">
    <h4 class="title">{{ title }}</h4>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100
    },
    message: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'success'
    }
  },
  created () { }
}
</script>
