<template>
  <div :class="$style['vote']">
    <div :class="$style['vote-question']">{{ question }}</div>

    <div
      :class="$style['vote-choice']"
      v-for="(choice, index) in choices"
      :key="index"
    >
      {{ choice }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'Vote',

  props: ['question', 'choices'],
}
</script>


<style module>
.vote {
  padding: 15px;
}

.vote-question {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
