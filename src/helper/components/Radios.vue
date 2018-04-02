<template>
<div>
  <div
    :class="$style['radio']"
    v-for="(choice, index) in choices"
    :key="index"
    @click="change(index)"
  >
    <span :class="[$style['radio-circle-outer'], `gr-${index + 1}`]">
      <span :class="[$style['radio-circle-inner'], (value === index) ? $style['radio-circle-checked'] : null]"/>
    </span>
    <span :class="$style['radio-title']">
      {{ choice }}
    </span>
  </div>
</div>
</template>


<script>
export default {
  name: 'Vote',

  props: ['choices', 'value'],

  methods: {
    change(index) { this.$emit('change', index) },
  },
}
</script>


<style module>
.radio {
  padding: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-circle-outer {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radio-circle-inner {
  width: 26px;
  height: 26px;
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #EEEEEE;
}

.radio-circle-checked {
  background: inherit;
  color: white;
}

.radio-circle-inner:hover {
  background: inherit;
  color: white;
}

.radio-title {
  margin-left: 10px;
}
</style>
