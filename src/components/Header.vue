<template>
  <div :class="$style.header">
    <span :class="$style['header-title']">Votelite</span>

    <i v-if="creator && page ==='answering'" @click="changePage" :class="$style.button">{{ 'list' }}</i>
    <i v-if="!creator || page ==='review'" @click="changePage" :class="creator && $style.button">{{ 'poll' }}</i>
    <i v-if="page ==='answering' && !showStatBeforeVoting" @click="sendToChat" :class="$style.button">{{ 'send' }}</i>
  </div>
</template>


<script>
import { getChartData } from '../helper/functions/helperFunctions'

const { W } = window

export default {
  name: "Header",

  props: {
    creator: Boolean,
    question: String,
    showStatBeforeVoting: Boolean,
    page: String,
    votes: Array,
    choices: Array,
  },

  methods: {
    changePage() {
      if (this.creator) {
        if (this.page === "answering") this.$emit("changePage", "review");
        else this.$emit("changePage", "answering");
      }
    },

    sendToChat() {
      W.sendMessageToCurrentChat('wapp', {
        wappId: '5d316d515e95591a52e9f78f',
        customize: {
          data: getChartData(this.votes, this.choices),
          title: this.question,
        },
      })
      W.analytics('SNED_CHART')
    },
  }
}
</script>


<style module>
.header {
  height: 50px;
  background: #70b1d6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  user-select: none;
}

.header-title {
  font-size: 16px;
  font-weight: 510;

  color: rgb(0, 0, 0);
}

.button {
  cursor: pointer;
}
</style>
