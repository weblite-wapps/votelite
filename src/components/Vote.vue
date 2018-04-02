<template>
<div :class="$style['vote']">
  <div :class="$style['vote-question']">{{ question }}</div>

  <Radios
    :choices="choices"
    :value="voteValue"
    :disable="vote !== null"
    @change="changeLocalVote"
  />

  <Button
    v-if="vote === null"
    label="Vote"
    @click.native="changeVote"
  />

  <div :class="$style['bottom']" />
</div>
</template>


<script>
import Radios from '../helper/components/Radios'
import Button from '../helper/components/button'

export default {
  name: 'Vote',

  components: { Radios, Button },

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

.bottom {
  height: 30px;
}
</style>
