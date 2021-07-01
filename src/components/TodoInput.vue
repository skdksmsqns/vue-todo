<template>
  <div class="inputBox shadow">
    <!-- v-model 입력된 텍스트값을 동적으로 바로 뷰인스턴스에 맵핑 -->
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" @keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!-- slot="header"를 가지면 <slot name="header">에 정의된 부분에 컨텐츠를 상위에서 재정의 할 수 있게 된다. -->
      <h3 slot="header">
        경고
        <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false"> </i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        //저장하는로직
        //localStorage.setItem('키','벨류');
        //JSON.stringify(obj) 오브젝트를 스트링값으로 변환
        //JSON.parse(obj) 스트링으로 바뀐 오브젝트를 다시 변환
        //localStorage.setItem(this.newTodoitem,JSON.stringify(obj));
        //const item = this.newTodoItem.trim();
        // this.$emit('addTodoItem', this.newTodoItem);

        //const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
