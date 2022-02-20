<template>
  <v-app>
    <v-app-bar
></v-app-bar>
    <v-main>
      <NavBar/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
