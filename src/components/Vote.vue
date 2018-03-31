<template>
<div :class="$style['vote']">
  <div :class="$style['vote-question']">{{ question }}</div>

  <div
    :class="$style['vote-item']"
    v-for="(choice, index) in choices"
    :key="index"
  >
    <span :class="[$style['vote-item-circle-outer'], `gr-${index + 1}`]">
      <span :class="$style['vote-item-circle-inner']"/>
    </span>
    <span :class="$style['vote-item-title']">
      {{ choice }}
    </span>
  </div>
</div>
</template>


<script>
export default {
  name: 'Vote',

  props: ['question', 'choices'],
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

.vote-item {
  padding: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
}

.vote-item:last-child {
  padding-bottom: 30px;
}

.vote-item-circle-outer {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.vote-item-circle-inner {
  width: 26px;
  height: 26px;
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #EEEEEE;
}

.vote-item-circle-inner:hover {
  background: inherit;
  color: white;
}

.vote-item-title {
  margin-left: 10px;
}
</style>
