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

<style type="text/css" lang="scss">
.vue-toast {
  position: fixed;
  top: 10px;
  right: 20px;
  width: 300px;
  border-radius: 5px;
  color: #fff;
  min-height: 62px;
  padding: 10px 15px;
  h4 {
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    font-size: 13px;
    margin-bottom: 0;
  }
  &.success {
    background: rgba(39, 174, 96, 0.7);
  }
  &.error {
    background: rgba(231, 76, 60, 0.7);
  }
}
</style>
