<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>{{ user.name }}'s Profile</h2>
        <hr>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-tabs card>
          <b-tab title="Profile">
            <b-form class="mt-2" @submit="onUpdateProfile">
              <b-row>
                <b-col lg="6" md="6" sm="6">
                  <b-form-group label="Name" label-for="name">
                    <b-form-input size="sm" required id="name" v-model="userData.name" type="text"/>
                  </b-form-group>

                  <b-form-group label="Email" label-for="email">
                    <b-form-input
                      size="sm"
                      disabled
                      required
                      id="email"
                      type="email"
                      :value="userData.email"
                    />
                  </b-form-group>

                  <b-button type="submit" variant="info">Update</b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-tab>
          <b-tab title="Settings">
            <b-form class="mt-2" @submit="onChangePassword">
              <b-row>
                <b-col lg="6" md="6" sm="6">
                  <b-form-group label="Old Password" label-for="old_password">
                    <b-form-input
                      size="sm"
                      type="password"
                      required
                      id="old_password"
                      v-model="passwordData.old_password"
                    />
                  </b-form-group>

                  <b-form-group label="Password" label-for="password">
                    <b-form-input
                      size="sm"
                      required
                      id="password"
                      type="password"
                      v-model="passwordData.password"
                    />
                  </b-form-group>

                  <b-form-group label="Confirm Password" label-for="password_confirmation">
                    <b-form-input
                      size="sm"
                      required
                      id="password_confirmation"
                      type="password"
                      v-model="passwordData.password_confirmation"
                    />
                  </b-form-group>
                  <b-button type="submit" variant="info">Change</b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { User } from '../../services/user'
export default {
  data () {
    return {
      passwordData: {
        old_password: null,
        password: null,
        password_confirmation: null
      },
      userData: {
        name: null,
        email: null
      }
    }
  },
  computed: {
    ...mapGetters('AuthStore', ['user'])
  },
  created () {
    this.userData = {
      name: this.user.name,
      email: this.user.email
    }
  },
  methods: {
    ...mapMutations('AuthStore', {
      updateUser: 'UPDATEUSER'
    }),
    onUpdateProfile (event) {
      event.preventDefault()
      User.updateProfile(this.userData).then(response => {
        this.updateUser(response.data.data)
        this.$toast.success({ title: 'Success', message: response.data.message })
        this.redirectToHome()
      })
    },
    onChangePassword (event) {
      event.preventDefault()
      User.changePassword(this.passwordData).then(response => {
        this.$toast.success({ title: 'Success', message: response.data.message })
        this.redirectToHome()
      })
    },
    redirectToHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
