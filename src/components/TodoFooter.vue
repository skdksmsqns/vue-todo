<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">ClearAll</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearAllItems');
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  margin: 1.5rem 0 1.5rem;
  color: rgb(123, 20, 241);
  display: block;
}
</style>
