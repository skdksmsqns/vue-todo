<template>
  <section>
    <transition-group name="list" tag="ul">
      <!-- <li v-for="(todoItem, index) in propsdata" class="shadow" :key="todoItem.item"> -->
      <li v-for="(todoItem, index) in this.$store.state.todoItems" class="shadow" :key="todoItem.item">
        <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', { todoItem, index });
    },
    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', { todoItem, index });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
/* .list-leave-active below version 2.1.8 */
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
