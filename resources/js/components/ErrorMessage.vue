<template>
  <div v-if="show && message" class="alert" :class="'alert-' + type">
    <a href="#" class="close" @click="show = false" aria-label="close">×</a>
    {{ message }}
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      show: true
    }
  }
}
</script>
