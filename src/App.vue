<template>
  <div :class="$style.root">
    <Header />
  </div>
</template>


<script>
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    Header,
  }
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
