<template>
  <div :class="$style.root">
    <Header :page.sync="page" />
    <Vote
      v-if="page === 'Vote'"
      :question="question"
      :choices="choices"
      :vote="vote"
      @change="changeVote"
    />
    <Stat
      v-if="page === 'Stat'"
      :choices="choices"
      :votes="votes"
    />
  </div>
</template>


<script>
import Header from './components/Header'
import Vote from './components/Vote'
import Stat from './components/Stat'

export default {
  name: 'App',

  components: {
    Header,
    Vote,
    Stat,
  },

  data: () => ({
    page: 'Vote',
    question: 'what javascript framework do you prefer for wapp development?',
    choices: ['vue.js', 'cycle.js', 'react.js', 'angular.js', 'riot', 'preact'],
    votes: [57, 2, 49, 12, 10, 22],
    vote: null,
  }),

  methods: {
    changeVote(vote) { this.vote = vote},
  },
}
</script>


<style module>
.root {
  width: 300px;
  height: 350px;
  background: #EEEEEE;
  border-radius: 10px;
  overflow: hidden;
}
</style>
