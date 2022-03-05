<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-row>
            <v-col>
              <v-card-title>VideoCity</v-card-title>
              <v-card-subtitle
              >Create account
              </v-card-subtitle
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>;

<script>
  export default {
  name: 'Register',
  data: () => ({
  email: '',
  channelName: '',
  password: '',
  confirmPassword: '',
}),
  methods: {
  async register() {
  return null;
}
};
  </script>;
