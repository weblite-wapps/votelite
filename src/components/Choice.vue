<template>
  <div :class="$style['choice']" @click="select">
    <div :class="$style['before-caption']">
      <div :class="$style['choice-percentage']">
        {{ percentage }}
      </div>

      <div :class="[$style['choice-circle-outer'], `gr-${index % 10}`]">
        <span :class="[$style['choice-circle-inner'], (state == 'selected' || index === selectedVote) ? $style['choice-circle-voted'] : null,
        (canSelect) ? $style['choice-selectable'] : null]" />
      </div>
    </div>

    <div :class="$style['choice-caption']">
      {{ caption }} 
    </div>

    <div :class="$style['choice-vote-count']">
      <div> {{ voteCount }} </div>
      <div> <i> person </i> </div>
    </div>
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
  padding: 5px 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 250px;
  height: 40px;

  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */

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

.before-caption {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.choice-caption {
  width: 170px;
  height: 30px;
  max-width: 170px;
  padding-left: 6px;
  font-size: 14px;

  display: flex;
  align-items: center;
}

.choice-vote-count {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  font-size: 13px;
}

.choice-percentage {
  font-size: 12px;
  padding-right: 3px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.choice-percentage::before {
  content: '%';
  font-size: 10px;
}

</style>
