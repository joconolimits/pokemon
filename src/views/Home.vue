<template>
  <v-container>
    <v-row justify="space-around" class="my-6">
      <v-avatar size="150" v-for="pokemon in pokemons" :key="pokemon.name" @click="pockemonName = pokemon.name">
        <img
          class="pokemon-img"
          :src="pokemon.img"
          :alt="pokemon.name"
        >
      </v-avatar>
    </v-row>
    <PokemonDetails :loading="loading" :details="details"/>
  </v-container>
</template>

<script>

import Pikachu from '@/assets/Pikachu.jpg'
import Ditto from '@/assets/Ditto.png'
import Charmander from '@/assets/charmander.jpg'
import PokemonDetails from '@/components/PokemonDetails'
import PokemonDetailsMixin from '@/mixins/PokemonDetailsMixin'

export default {
  name: 'Home',
  components: { PokemonDetails },
  mixins: [PokemonDetailsMixin],
  data () {
    return {
      pokemons: [
        {
          img: Charmander,
          name: 'charmander'
        },
        {
          img: Pikachu,
          name: 'pikachu'
        },
        {
          img: Ditto,
          name: 'ditto'
        }
      ]
    }
  },

  created () {
    this.pockemonName = 'pikachu'
  }
}
</script>
<style scoped>
.pokemon-img { background: #fff }
</style>
