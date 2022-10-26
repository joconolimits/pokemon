<template>
  <v-container>
    <v-text-field
      solo
      rounded
      clearable
      prepend-inner-icon="mdi-magnify"
      v-model="searchText"
      :hint="searchText ? 'Press enter or click the search button' : ''"
      label="Find pokemon"
      @click:prepend-inner="findPokemon"
      @keyup.enter="findPokemon"
    ></v-text-field>
    <v-row justify="space-around" class="my-6">
      <v-avatar size="150">
        <img
          class="pokemon-img"
          :src="image"
          :alt="details.name"
        >
      </v-avatar>
    </v-row>
    <PokemonDetails :loading="loading" :details="details"/>
  </v-container>
</template>

<script>

import PokemonDetails from '@/components/PokemonDetails'
import PokemonDetailsMixin from '@/mixins/PokemonDetailsMixin'

export default {
  name: 'Search',
  components: { PokemonDetails },
  mixins: [PokemonDetailsMixin],
  data () {
    return {
      loading: false,
      searchText: '',
      details: {}
    }
  },
  computed: {
    image () {
      return this.details?.sprites?.front_default
    }
  },
  watch: {
    searchText () {
      this.details = {}
    }
  },
  methods: {
    findPokemon () {
      if (!this.searchText) return
      this.pockemonName = this.searchText
    }
  }
}
</script>
<style scoped>
.pokemon-img { background: #fff }
</style>
