<template>
  <div :class="$style['stat']">
    <div v-for="(choice, index) in choices">
      {{ votesPercentage[index] }}% {{ choice }}
    </div>
  </div>
</template>


<script>
const { R } = window


export default {
  name: 'Stat',

  props: ['choices', 'votes'],

  computed: {
    votesPercentage() {
      const sum = R.sum(this.votes)
      return this.votes.map(voteNumber => Math.round((voteNumber / sum) * 100))
    }
  },
}
</script>


<style module>
.stat {
  padding: 10px;
}
</style>
