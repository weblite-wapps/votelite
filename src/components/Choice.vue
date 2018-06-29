<template>
  <div :class="[$style['choice'], (selectedVote !== null) ? $style['not-button'] : null]" @click="select">
    <div :class="$style['before-caption']">
      <div :class="$style['choice-percentage']">
        {{ percentage }}
      </div>

      <div :class="[$style['choice-circle'], (state == 'selected') ? $style['choice-circle-selected'] : null,
      (selectedVote == index) ? $style['choice-circle-voted'] : null, (canSelect && state != 'selected') ? $style['choice-circle-selectable'] : null]">

        <div v-show="state === 'selected' && selectedVote === null" transition="fade"> ? </div>
        <div v-show="selectedVote == index" transition="fade"> X </div>
      </div>
    </div>

    <div :class="$style['choice-caption']">
      {{ caption | trimText }}
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
        this.state = 'not selected'
        bus.$emit('choiceSelected', null)
      }
    }
  },
  computed: {
    canSelect () {
      return (this.selectedVote === null)
    }
  },
  filters: {
    trimText (text) {
      return text.slice(0, 25)
    }
  },
  created () {
    if (this.selectedVote === this.index) this.state = 'voted'
    else this.state = 'not selected'

    bus.$on('choiceSelected', (index) => {
      if (index != this.index) { this.state = 'not selected' }
    })
  }
}
</script>


<style module>

.choice {
  padding: 5px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 280px;
  height: 40px;

  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */

  cursor: pointer;
}

.not-button {
 cursor: default;
}

.choice-circle {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-color: rgb(116, 170, 201);
  border-style: solid;
  border-width: 1.2px;
}

.choice-circle-selected {
  background: rgba(61, 147, 197, 0.767);
  color: rgb(255, 235, 235);
}

.choice-circle-voted {
  background: rgba(61, 147, 197, 0.767); 
  color: rgb(255, 235, 235);
}

.choice-circle.choice-circle-selectable:hover {
    background: rgba(6, 176, 255, 0.267);
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
  overflow: hidden;

  color: rgba(255, 255, 255, 0.61);

  display: flex;
  align-items: center;
}

.choice-vote-count {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  font-size: 13px;
  color: rgba(199, 244, 255, 0.712); 
}

.choice-percentage {
  font-size: 12px;
  padding-right: 7px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: rgba(213, 247, 255, 0.712);
}

.choice-percentage::before {
  content: '%';
  font-size: 10px;
}

.fade-transition {
  transition: all 1s ease;
  color: black;
}

.fade-enter, .fade-leave {
  opacity: 0;
}

</style>
