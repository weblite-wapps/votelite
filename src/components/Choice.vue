<template>
  <div
    :class="[$style['choice'], (selectedVote !== null) ? $style['not-button'] : null]"
    @click="select"
  >
    <transition name="fade-percentage">
      <div
        v-show="showStatBeforeVoting || (!showStatBeforeVoting && selectedVote !== null)"
        :class="$style['choice-percentage']"
      >{{ percentage }}</div>
    </transition>

    <div :class="$style['choice-not-stat']">
      <div
        :class="[
          $style['choice-circle'],
          (state == 'selected') ? $style['choice-circle-selected'] : null,
          (selectedVote == index) ? $style['choice-circle-voted'] : null,
          (canSelect && state != 'selected') ? $style['choice-circle-selectable'] : null
        ]"
      >
        <transition name="fade-check">
          <p :class="$style['check-mark']" v-show="selectedVote === index">
            <i>check</i>
          </p>
        </transition>
        <div v-if="selectedVote !== index">
          <transition :name="(selectedVote === index) ? 'fade-question-disabled' : 'fade-question'">
            <p
              :class="$style['question-mark']"
              v-show="state === 'selected' && selectedVote === null"
              style="color: white"
            >?</p>
          </transition>
        </div>
      </div>

      <div :class="$style['choice-caption']">{{ shortenedCaption }}</div>
    </div>

    <transition name="fade-vote-count">
      <div
        v-show="showStatBeforeVoting || (!showStatBeforeVoting && selectedVote !== null)"
        :class="$style['choice-vote-count']"
      >
        <div>{{ voteCount }}</div>
        <div>
          <i>person</i>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import { bus } from '../main.js'

export default {
  name: 'Choice',
  props: [
    'caption',
    'percentage',
    'vote-count',
    'index',
    'selectedVote',
    'showStatBeforeVoting',
  ],
  data() {
    return {
      state: 'not selected', // 'not selected', 'selected', 'voted'
    }
  },
  methods: {
    select() {
      if (this.state == 'not selected' && this.canSelect) {
        this.state = 'selected'
        bus.$emit('choiceSelected', this.index)
      } else if (this.state == 'selected') {
        this.state = 'not selected'
        bus.$emit('choiceSelected', null)
      }
    },
  },
  computed: {
    canSelect() {
      return this.selectedVote === null
    },
    shortenedCaption() {
      return this.caption.slice(0, 45)
    },
  },
  created() {
    if (this.selectedVote === this.index) this.state = 'voted'
    else this.state = 'not selected'

    bus.$on('choiceSelected', index => {
      if (index != this.index) {
        this.state = 'not selected'
      }
    })
  },
}
</script>


<style module>
.choice {
  padding: 3.5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 50px;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
  cursor: pointer;
}

.choice,
.choice * {
  box-sizing: border-box;
}

.not-button {
  cursor: default;
}

.choice-circle {
  width: 32px;
  height: 32px;
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

.choice-not-stat {
  width: calc(100% - 57px);
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.choice-caption {
  width: calc(100% - 35px);
  margin: auto 7px;
  font-size: 14px;
  overflow: hidden;
  word-break: break-all;
  color: rgba(255, 255, 255, 0.61);

  display: flex;
  align-items: center;
}

.choice-vote-count {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  font-size: 10px;
  color: rgba(199, 244, 255, 0.712);
}

.choice-percentage {
  font-size: 12px;
  margin-right: 5px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: rgba(213, 247, 255, 0.712);
}

.choice-percentage::before {
  content: '%';
  font-size: 10px;
}
</style>
