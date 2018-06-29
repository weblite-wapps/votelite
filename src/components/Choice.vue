<template>
  <div :class="$style['choice']" @click="select">
    <span :class="[$style['choice-circle-outer'], `gr-${index % 10}`]">
      <span :class="[$style['choice-circle-inner'], (state == 'selected' || index === selectedVote) ? $style['choice-circle-voted'] : null,
      (canSelect) ? $style['choice-selectable'] : null]" />
    </span>
    <span :class="$style['choice-text']">
      {{ caption }} | {{ percentage }}% | {{ voteCount }}
    </span>
  </div>
</template>


<script>
import { bus } from '../main.js'

export default {
  name: 'Choice',
  props: ['caption', 'percentage', 'vote-count','index', 'selectedVote'],
  data () {
    return {
      state: 'not selected', // 'not selected', 'selected', 'voted'
    }
  },
  methods: {
    select () {
      if (this.state == 'not selected' && this.canSelect) {
        this.state = 'selected'
        bus.$emit('choiceSelected', this.index)
      }
      else if (this.state == 'selected') {
        this.state = 'voted'
        this.$emit('makeVote', this.index)
      }
    }
  },
  computed: {
    canSelect () {
      return (this.selectedVote === null)
    }
  },
  created () {
    bus.$on('choiceSelected', (index) => {
      if (index != this.index) { this.state = 'not selected' }
    })
  }
}
</script>


<style module>
.choice {
  padding: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.choice-circle-outer {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choice-circle-inner {
  width: 26px;
  height: 26px;
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #EEEEEE;
}

.choice-circle-selected {
  background: inherit;
  color: white;
}

.choice-circle-voted {
  background: inherit;
  color: white;
}

.choice-selectable.choice-circle-inner:hover {
    background: inherit;
    color: white;
}

.choice-text {
  margin-left: 10px;

  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
}
</style>
