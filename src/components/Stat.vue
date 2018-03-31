<template>
  <div :class="$style['stat']">
    <div
      :class="$style['stat-item']"
      v-for="(choice, index) in choices"
      :key="index"
    >
      <span :class="$style['stat-item-circle']">{{ votesPercentage[index] }}%</span>
      <span :class="$style['stat-item-title']">{{ choice }}</span>
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
  height: 300px;
  overflow: scroll;
}

.stat-item {
  padding: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
}

.stat-item:last-child {
  padding-bottom: 15px;
}

.stat-item-circle {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px red solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.stat-item-title {
  margin-left: 10px;
}
</style>
