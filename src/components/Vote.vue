<template>
<div :class="$style['vote']">
  <div :class="$style['vote-question']">{{ question }}</div>

  <Choice
    v-for="(choice, index) in choices"
    :caption="choice"
    :percentage="votesPercentage[index]"
    :voteCount="votesCount[index]"
    :selected-vote="selectedVote"
    :key="index"
    :index="index"
    @makeVote="makeVote"
  />

  <div :class="$style['bottom']" />
</div>
</template>


<script>
const { R } = window

import Choice from './Choice.vue'
import Button from '../helper/components/button.vue'

export default {
  name: 'Vote',

  components: { Choice, Button },

  props: ['question', 'choices', 'votes', 'selectedVote'],

  data: () => ({
    
  }),

  computed: {
    votesPercentage() {
      const sum = R.sum(this.votes)
      var temp_array = []
      
      if (sum === 0)
        for (let i = 0; i < this.choices.length; i++)
          temp_array.push(0)
      else {
        temp_array = this.votes.map(voteNumber => Math.round((voteNumber / sum) * 100))
      }

      return temp_array
    }, 
    votesCount() {
      var temp_array = []

      if (R.sum(this.votes) === 0 || this.choices.length != this.votes.length)
        for (let i = 0; i < this.choices.length; i++)
          temp_array.push(0)
      else
        temp_array = this.votes

      return temp_array
    }
  },

  methods: {
    makeVote(index) { this.$emit('makeVote', index) },
  },
}
</script>


<style module>
.vote {
  height: 300px;
  padding: 15px;
  overflow: scroll;
}

.vote-question {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.bottom {
  height: 30px;
}
</style>
