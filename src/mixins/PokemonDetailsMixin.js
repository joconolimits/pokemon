import { eventBus } from '@/utils/EventBus'

export default {
  data () {
    return {
      pockemonName: '',
      loading: false,
      details: {}
    }
  },
  watch: {
    async pockemonName () {
      this.loading = true
      try {
        this.details = await this.$store.dispatch('fetchPokemonDetails', this.pockemonName)
        this.loading = false
      } catch (e) {
        eventBus.$emit('showMessage', { text: 'We could not fetch your pokemon. Try again later!', color: 'red' })
      }
    }
  }
}
