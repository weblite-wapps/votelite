<template>
<div :class="$style.root">
  <Header/>

  <Vote
    :question="question"
    :choices="choices"
    :votes="votes"
    :selectedVote="vote"
    @makeVote="makeVote($event)"
  />

  <div
    v-if="customizeMode"
    :class="$style.customize"
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
import webliteHandler from './helper/functions/weblite.api'
// W
const { W } = window
const bus = {

}

export default {
  name: 'App',

  components: {
    Header,
    Vote,
    Stat,
  },

  data: () => ({
    customizeMode: false,
    question: 'How many do you want?',
    choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
    votes: [],
    vote: null,
  }),

  created() { W && webliteHandler(this) },

  methods: {
    makeVote(vote) {
      console.log('vote ' + vote)

      if (vote === null) return null
      this.vote = vote
      addVote(vote, this.choices.length)
      W.changeLocaldb(vote)
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

.customize {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  top: 0;
  right: 0;
}
</style>
