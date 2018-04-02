<template>
<div :class="$style['vote']">
  <div :class="$style['vote-question']">{{ question }}</div>

  <Radios
    :choices="choices"
    :value="voteValue"
    :disable="vote !== null"
    @change="changeLocalVote"
  />

  <div :class="$style['vote-button-wrapper']">
    <button
      :class="$style['vote-button']"
      @click="changeVote"
      v-if="vote === null"
    >
      Vote
    </button>
  </div>

  <div :class="$style['bottom']" />
</div>
</template>


<script>
import Radios from '../helper/components/Radios'


export default {
  name: 'Vote',

  components: { Radios },

  props: ['question', 'choices', 'vote'],

  data: () => ({
    localVote: null,
  }),

  computed: {
    voteValue() {
      if (this.vote !== null) return this.vote
      return this.localVote
    }
  },

  methods: {
    changeLocalVote(vote) { this.localVote = vote },

    changeVote() { this.$emit('change', this.localVote) },
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

.vote-button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.vote-button {
  width: 240px;
  height: 30px;
  background: inherit;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid red;
  outline: none;
  cursor: pointer;
}

.bottom {
  height: 30px;
}
</style>
