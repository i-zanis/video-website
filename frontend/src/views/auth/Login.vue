<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>VideoCity
            <v-card-subtitle>Login
              <v-card-text>
                <form>
                  <v-text-field v-model='email'>Email</v-text-field>
                  <v-text-field v-model='password'>Password</v-text-field>
                  <v-btn>Login</v-btn>
                  <v-btn>Forgot password?</v-btn>
                  <v-btn>Create Account</v-btn>
                </form>
              </v-card-text>
            </v-card-subtitle>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'LoginVue',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async login() {
    }
  }
};
</script>

<style scoped>

</style>
