<template>
<div :class="$style.header">
  <span :class="$style['header-title']">Votelite</span>
  
  <i class="noselect">
    {{ 'poll' }}
  </i>
</div>
</template>


<script>
export default {
  name: 'Header',
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
}

.header-title {
  font-size: 16px;
  font-weight: 510;

  color: rgb(0, 0, 0);
}
</style>
