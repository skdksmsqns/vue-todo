import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //this.todoItems.push(localStorage.key(i));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payLoad) {
      localStorage.removeItem(payLoad.todoItem.item);
      state.todoItems.splice(payLoad.index, 1);
    },
    toggleOneItem(state, payLoad) {
      state.todoItems[payLoad.index].completed = !state.todoItems[payLoad.index].completed;

      //로컬스트리지 데이터 갱신
      localStorage.removeItem(payLoad.todoItem.item);
      localStorage.setItem(payLoad.todoItem.item, JSON.stringify(payLoad.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
