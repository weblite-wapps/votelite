<template>
<div :class="$style.root">
  <Header :page.sync="page" :vote="vote"/>

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


export default {
  name: 'App',

  components: {
    Header,
    Vote,
    Stat,
  },

  data: () => ({
    customizeMode: false,
    page: 'Vote',
    question: 'How many do you want?',
    choices: [1, 2, 3, 'reza'],
    votes: [],
    vote: null,
  }),

  created() { W && webliteHandler(this) },

  methods: {
    changeVote(vote) {
      if (vote === null) return null
      this.vote = vote
      this.page = 'Stat'
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
