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
// components
import Header from './components/Header'
import Vote from './components/Vote'
import Stat from './components/Stat'
// helper
import { addVote } from './helper/functions/changeVotes'
// W && R
const { W, R } = window


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
    votes: [],
    vote: null,
  }),

  created() {
    W.share.getFromServer([]).then(() => W.start())
    W.share.subscribe((votes) => {
      console.log(votes)
      this.votes = votes || []
    })
  },

  methods: {
    changeVote(vote) {
      this.vote = vote
      this.page = 'Stat'
      addVote(vote, this.choices.length)
    },
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
