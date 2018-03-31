<template>
  <div :class="$style.header">
    <span :class="$style['header-title']">Votelite</span>
    <i class="noselect" @click="onChangePage">
      {{ isStatPage ? 'poll' : 'pie_chart_outlined' }}
    </i>
  </div>
</template>


<script>
export default {
  name: 'Header',

  props: ['isStatPage'],

  methods: {
    onChangePage() {
      this.$emit('update:isStatPage', !this.isStatPage)
    },
  },
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
