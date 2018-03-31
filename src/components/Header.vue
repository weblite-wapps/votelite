<template>
  <div :class="$style.header">
    <span :class="$style['header-title']">Votelite</span>
    <i class="noselect" @click="onChangePage">
      {{ page === 'Vote' ? 'pie_chart_outlined' : 'poll' }}
    </i>
  </div>
</template>


<script>
export default {
  name: 'Header',

  props: ['page'],

  methods: {
    onChangePage() { this.$emit('update:page', this.page === 'Vote' ? 'Stat' : 'Vote') },
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
