<template>
  <nav id='navbar'>
    <v-app-bar flat app clipped-left>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        VideoCity
      </v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-text-field
        @click:append='search'
        flat
        hide-details
        append-icon='mdi-magnify'
        placeholder='Search'
        outlined
        dense
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-menu offsetY>
        <template v-slot:activator='{ on: menu }'>
          <v-tooltip bottom>
            <template v-slot:activator='{ on: tooltip }'>
              <v-btn icon class='mr-7' v-on='{ ...tooltip, ...menu }'
              >
                <v-icon size='25'>mdi-video-plus</v-icon>
              </v-btn
              >
            </template>
            <span>Create a video and more</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item router to='/studio'>
            <v-list-item-icon class='mr-3'
            >
              <v-icon>mdi-play-box-outline</v-icon>
            </v-list-item-icon
            >
            <v-list-item-title>Upload video</v-list-item-title>
          </v-list-item>
          <!--  -->
        </v-list>
      </v-menu>
    </v-app-bar>

  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>

</style>
