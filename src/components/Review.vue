<template>
  <div :class="$style['wrapper']">
    <div :class="$style['container']">
      <div :class="$style['list-container']">
        <div name="user-group" tag="div">
          <div :class="$style['user']" v-for="user in users" :key="user.id">
            <div :class="$style['list-item-inside']">
              <div :class="$style['user-title']">{{user.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getMembers } from "../helper/functions/helperFunctions";
export default {
  name: "Review",

  data: () => ({
    users: []
  }),

  props: {
    votes: Array
  },
  created() {
    this.users = getMembers(this.votes);
  }
};
</script>


<style module>
html,
body {
  margin: 0;
  padding: 0;
  /* background-color: #1aa295; */
  width: 100%;
  height: 100%;
  font-family: "Lato";
  color: #ffffff;
  font-weight: 300;
  font-size: 13px;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .container {
  /* position: relative; */
  width: 100%;
  height: 100%;
  background-color: #0a1721;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow: auto;
}

::-webkit-scrollbar-track {
  background-color: #ffffff;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #ffffff;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #c9c9c9;
  border-radius: 40px;
  border: 2px solid #ffffff;
}

::-webkit-scrollbar-thumb:hover {
  border: 0px solid #ffffff;
}

.wrapper .container .list-container .user {
  width: 90%;
  margin: 10px auto;
  background-color: #70b1d6;
  transition: all 0.5s;
  height: 20px;
  border-radius: 5px;
  color: black;
}

.wrapper .container .list-container .user:hover {
  background-color: #1d3345;
  transform: scale(1.02);
  color: white;
}

.wrapper .container .list-container .user .list-item-inside {
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.wrapper .container .list-container .user .list-item-inside .user-title {
  text-transform: capitalize;
}

/* .user-group-enter-to {
  opacity: 1;
  transform: translateX(0%);
}
.user-group-leave-active {
}
.user-group-group-move {
  opacity: 1;
  transition: all 0.5s;
}
.user-group-enter,
.user-group-leave-to {
  opacity: 0;
  transform: translateX(-100%); 
} */
</style>
