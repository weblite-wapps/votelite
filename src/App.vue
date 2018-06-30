<template>
<div :class="$style.root">
  <Header/>

  <Vote
    :question="question"
    :choices="choices"
    :votes="votes"
    :selectedVote="vote"
    :selectedChoice="selectedChoice"
    :showStatBeforeVoting="showStatBeforeVoting"
  />

  <transition name="move-vote-button">
    <Button
      v-if="vote === null && selectedChoice !== null" 
      label="Vote"
      @click="makeVote(selectedChoice)"
    />
  </transition>

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

import { bus } from './main.js'

// helper
import Button from './helper/components/Button'

import { addVote } from './helper/functions/changeVotes'
import webliteHandler from './helper/functions/weblite.api'
// W
const { W } = window

export default {
  name: 'App',

  components: {
    Header,
    Vote,
    Button
  },

  data: () => ({
    customizeMode: false,
    question: 'How many do you want?',
    choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4', 'choice 1', 'choice 2', 'choice 3', 'choice 4'],
    votes: [],
    vote: null,
    selectedChoice: null,
    showStatBeforeVoting: false
  }),

  created() { 
    W && webliteHandler(this)
    bus.$on('choiceSelected', (index) => {
          this.selectedChoice = index })
  },

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
