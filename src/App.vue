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
    customizeMode: W.mode === 'customize',
    page: 'Vote',
    question: 'asdasd asdasd asdasd asdasdasd ?',
    choices: [1, 2],
    votes: [2, 3],
    vote: null,
  }),

  created() {
    this.customizeMode && W.start()
    W.share.getFromServer([]).then(() => W.start())
    W.loadData().then(({ localdb, customize }) => {
      this.question = customize.question
      this.choices = customize.choices
      this.name = name
      if(localdb !== undefined) this.vote = localdb
    })
    W.share.subscribe((votes) => { this.votes = votes || [] })
    W.onChangeValue(({ key, value }) => {
      if (key === 'question') this.question = value
      else if (key === 'choices') this.choices = value
    })
    W.changeCustomize(R.identity)
  },

  methods: {
    changeVote(vote) {
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
