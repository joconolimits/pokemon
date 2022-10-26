<template>
  <v-snackbar
    v-model="snackbar"
    :color="color"
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="black"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { eventBus } from '@/utils/EventBus'

export default {
  name: 'Snackbar',
  data () {
    return {
      snackbar: false,
      text: '',
      color: ''
    }
  },
  created () {
    eventBus.$on('showMessage', (message) => {
      this.snackbar = true
      this.text = message.text
      this.color = message.color
    })
  }
}
</script>

<style scoped>

</style>
