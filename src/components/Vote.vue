<template>
  <div :class="$style['vote-container']" :style="{height: currentHeight + 'px'}">
    <div :class="$style['vote-question']">{{ question }}</div>
    <div :class="$style['vote-choices']">
      <Choice
        v-for="(choice, index) in choices"
        :caption="choice"
        :percentage="votesPercentage[index]"
        :voteCount="votesCount[index]"
        :selected-vote="selectedVote"
        :showStatBeforeVoting="showStatBeforeVoting"
        :key="index"
        :index="index"
      />
    </div>
    <div :class="$style['bottom']"/>
  </div>
</template>


<script>
// components
import Choice from './Choice.vue'
// R
const { R } = window


export default {
  name: 'Vote',

  components: { Choice },

  props: [
    'question',
    'choices',
    'votes',
    'selectedVote',
    'selectedChoice',
    'showStatBeforeVoting',
  ],

  data: () => ({

  }),

  computed: {
    votesPercentage() {
      const sum = R.sum(this.votes)
      var temp_array = []

      if (sum === 0) for (let i = 0; i < this.choices.length; i++) temp_array.push(0)
      else temp_array = this.votes.map(voteNumber => Math.round((voteNumber / sum) * 100))

      return temp_array
    },

    votesCount() {
      var temp_array = []

      if (R.sum(this.votes) === 0 || this.choices.length != this.votes.length)
        for (let i = 0; i < this.choices.length; i++) temp_array.push(0)
      else temp_array = this.votes

      return temp_array
    },

    currentHeight() {
      if (this.selectedChoice !== null && this.selectedVote === null) return 228
      else return 280
    }
  }
}
</script>


<style module>
.vote-container {
  display: flex;
  flex-direction: column;

  padding: 15px 0;
  overflow-y: auto;
  overflow-x: hidden;

  background: rgb(49, 49, 49);

  -webkit-transition: height 0.08s ease;
  transition: height 0.08s ease;
}

.vote-choices {
  margin: 7px auto;
  height: 100vh;
  width: 100%;
  overflow: auto;
}

.vote-question {
  padding-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
  color: rgba(220, 251, 255, 0.726);
}

.vote-question::before, .vote-question::after {
  /* content: " \" "; */
  color: rgba(100, 190, 212, 0.527);
}

.bottom {
  height: 30px;
}

.vote-choices::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555555;
  border-radius: 100px;
}

.vote-choices::-webkit-scrollbar {
  width: 10px;
  background-color: #555555;
  border-radius: 100px;
}

.vote-choices::-webkit-scrollbar-thumb {
  background-color: #7bacca;
  border: 2px solid #555555;
  border-radius: 100px;
}

.vote-choices::-webkit-scrollbar-thumb:hover {
  border: 5px solid #70b1d6;
}

</style>