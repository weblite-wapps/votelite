<template>
  <div :class="$style.header">
    <span :class="$style['header-title']">Votelite</span>
    <i class="noselect">pie_chart_outlined</i>
  </div>
</template>


<script>
export default {
  name: 'Header'
}
</script>


<style module>
.header {
  padding: 10px;
  background: #BDBDBD;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 16px;
  font-weight: 500;
}
</style>
