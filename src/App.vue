<template>
  <div :class="$style.root">
    <Header :isStatPage.sync="isStatPage" />
    {{ isStatPage ? 'stat' : 'vote' }}
  </div>
</template>


<script>
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    isStatPage: false,
  }),
}
</script>


<style module>
.root {
  width: 300px;
  height: 350px;
  background: #EEEEEE;
  border-radius: 10px;
  overflow: hidden;
}
</style>
