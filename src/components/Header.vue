<template>
  <div :class="$style.header">
    <span :class="$style['header-title']">Votelite</span>

    <i v-if="creator && page ==='answering'" @click="changePage" class="noselect">{{ 'list' }}</i>
    <i v-else @click="changePage" class="noselect">{{ 'poll' }}</i>
  </div>
</template>


<script>
export default {
  name: "Header",

  props: {
    creator: Boolean,
    page: String
  },
  methods: {
    changePage() {
      if (this.creator) {
        if (this.page === "answering") this.$emit("changePage", "review");
        else if (this.creator) this.$emit("changePage", "answering");
      }
    }
  }
};
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
