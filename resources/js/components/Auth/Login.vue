<template>
    <div class="container">
        <div class="row">
        <h2><strong>Login</strong></h2>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="credentials.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="credentials.password" type="password" class="form-control" name="password" id="password" placeholder="Password">
                    </div>
                    <div class="form-check">
                        <button @click="login()" type="button" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        credentials () {
            return this.$store.getters['AuthStore/credentials']
        }
    },
    created () { },
    methods: {
        login () {
            this.$store.dispatch('AuthStore/login', this.credentials).then(response => {
                console.log('Response', response)
            })
        }
    }
}
</script>
