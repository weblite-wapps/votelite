<template>
  <div :class="$style.root">
    <Header :page="page" :creator="creator" @changePage="changePage"/>
    <div v-if="page==='answering'">
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

      <div v-if="customizeMode" :class="$style.customize"/>
    </div>
    <Review v-if="page!=='answering'" :votes="votesById"/>
  </div>
</template>


<script>
// components
import Header from "./components/Header";
import Vote from "./components/Vote";
import Button from "./helper/components/Button";
import Review from "./components/Review";
// helper
import { bus } from "./main.js";
import { addVote } from "./helper/functions/changeVotes";

import webliteHandler from "./helper/functions/weblite.api";
// W
const { W } = window;

export default {
  name: "App",

  components: {
    Header,
    Vote,
    Button,
    Review
  },
  data: () => ({
    customizeMode: false,
    question: "",
    choices: [],
    votes: [],
    votesById: [],
    vote: null,
    selectedChoice: null,
    showStatBeforeVoting: false,
    userId: "",
    userName: "",
    page: "answering",
    creator: false
  }),

  created() {
    W && webliteHandler(this);
    bus.$on("choiceSelected", index => {
      this.selectedChoice = index;
    });
  },

  methods: {
    makeVote(vote) {
      if (vote == null) return null;
      this.vote = vote;
      addVote(vote, this.choices.length, this.userName, this.userId);
    },
    changePage(page) {
      this.page = page;
    }
  }
};
</script>


<style module>
.root {
  width: 300px;
  height: 350px;
  background: #eeeeee;
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
