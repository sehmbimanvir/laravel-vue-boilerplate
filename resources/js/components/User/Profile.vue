<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>{{ user.name }}'s Profile</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-tabs>
          <b-tab title="first" active>
            <br>I'm the first fading tab
          </b-tab>
          <b-tab title="second">
            <br>I'm the second tab content
          </b-tab>
          <b-tab title="disabled" disabled>
            <br>Disabled tab!
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters('AuthStore', ['user'])
  }
}
</script>
