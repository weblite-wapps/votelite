<template>
<div :class="$style['button-wrapper']">
  <div :class="$style['button-outer']">
    <div :class="$style['button-inner']">
      {{ label }}
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Button',

  props: ['label'],
}
</script>


<style module>
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.button-outer {
  width: 240px;
  height: 30px;
  border-radius: 6px;
  background: inherit;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  background: #000046;
  background: -webkit-linear-gradient(to right, #000046, #1cb5e0);
  background: linear-gradient(to right, #000046, #1cb5e0);
}

.button-inner {
  width: 236px;
  height: 26px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #EEEEEE;
}

.button-inner:hover {
  background: inherit;
  color: white;
}
</style>
