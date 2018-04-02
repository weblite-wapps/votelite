<template>
<div :class="$style['stat']">
  <div
    :class="$style['stat-item']"
    v-for="(choice, index) in choices"
    :key="index"
  >
    <span :class="[$style['stat-item-circle-outer'], `gr-${index + 1}`]">
      <span :class="$style['stat-item-circle-inner']">
        {{ votesPercentage[index] }}%
      </span>
    </span>

    <div :class="$style['stat-item-text']">
      <div>{{ choice }}</div>
      <div :class="$style['stat-item-number']">
        {{ votes[index] }} person
      </div>
    </div>
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

.stat-item-circle-outer {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;
}

.stat-item-circle-inner {
  width: 46px;
  height: 46px;
  border-radius: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #EEEEEE;
}

.stat-item-circle-inner:hover {
  background: inherit;
  color: white;
}

.stat-item-text {
  width: 210px;
  padding-left: 10px;
}

.stat-item-number {
  font-size: 10px;
  width: inherit;
  text-align: right;
}
</style>
