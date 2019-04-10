<template>
  <div :class="$style.Review">
    <div v-for="item in members" :key="item.id" :class="$style['Review-member']">{{item.name}}</div>
  </div>
</template>


<script>
import { getMembers } from "../helper/functions/helperFunctions";
export default {
  name: "Review",

  data: () => ({
    members: []
  }),

  props: {
    votes: Array
  },
  created() {
    console.log("votes ", this.votes);
    this.members = getMembers(this.votes);
    console.log("members ", this.members);
  }
};
</script>


<style module>
.Review {
}
</style>
