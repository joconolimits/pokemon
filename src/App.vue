<template>
  <v-app col>
    <v-app-bar
      dense
      app
    >
      <v-btn :to="{name: 'Home'}">Home</v-btn>
      <v-btn :to="{name: 'Search'}">Search</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <snackbar />
  </v-app>
</template>

<script>

import Snackbar from '@/components/Snackbar'

export default {
  name: 'App',
  components: { Snackbar }
}
</script>
<style>
.theme--light.v-application { background: #0d7dc2 }
</style>
