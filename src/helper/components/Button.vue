<template>
<div :class="$style['button-container']" @click="$emit('click')">
  {{ label }}
</div>
</template>


<script>
export default {
  name: 'Button',

  props: ['label'],
}
</script>


<style module>
.button-container {
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  background: inherit;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background: #2a87bd;
  color: white;
}

.button-container:hover {
  color: black;
}
</style>
