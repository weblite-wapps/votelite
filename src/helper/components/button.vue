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
  width: 100%;
  height: 50px;
  background: inherit;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background: #3b3b8f;
  color: white;
}

.button-inner:hover {
  background: inherit;
  color: white;
}
</style>
