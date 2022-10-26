<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-skeleton-loader type="list-item-three-line" v-if="loading" />
        <v-row v-else>
          <v-col cols="12" align="center">
            <h1>{{ details.name }}</h1>
          </v-col>
          <v-col cols="4" class="pl-8">
            <h3>Abilities</h3>
            <ul>
              <li v-for="ability in abilities" :key="ability">{{ ability }}</li>
            </ul>
          </v-col>
          <v-col cols="4">
            <h3>Stats</h3>
            <ul>
              <li v-for="stat in stats" :key="stat.text">{{ stat.text }}: {{ stat.value }}</li>
            </ul>
          </v-col>
          <v-col cols="4">
            <h3>Moves</h3>
            <ul>
              <li v-for="move in moves" :key="move">{{ move }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'PokemonDetails',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    details: {
      type: Object,
      required: true
    }
  },
  computed: {
    abilities () {
      return this.details.abilities?.map(abilityObj => abilityObj.ability.name)
    },
    stats () {
      return this.details.stats?.map(statObj => ({ text: statObj.stat.name, value: statObj.base_stat }))
    },
    moves () {
      return this.details.moves?.map(moveObj => moveObj.move.name)
    }
  }
}
</script>
<style scoped>
.v-sheet.v-card {
  border-radius: 16px;
}
</style>
