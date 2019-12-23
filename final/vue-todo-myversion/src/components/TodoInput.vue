<template>
  <div class="inputBox shadow">
    <!-- v-model은 데이터를 즉시 동기화 함, 그러하니 v-model는  data()를 부르는게 맞음 -->
    <input type="text" v-model="newTodoItem" placeholder="add anything!" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <!-- fa fa-plus는 아이콘 추가임 -->
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal=false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal=false">
        할 일을 입력하세요
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>
<script>
import Modal from "./common/Modal.vue";
export default {
  data() {
    return {
      newTodoItem: "처음데이터",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim(); //.trim remove unecssary blanks. ex)  "     Hello World!     " --> "Hello World!" 그런데 왜 아직 스페이스 하나는 등록이 될까?
        this.$emit("addTodo", value);
        //여기서 더 이상  localStorage를 안하고 상위에서 처리한다. localStorage.setItem(value, value); // .setItem(keyName, keyValue);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal: Modal
  }
};
</script>
<style>
input:focus {
  /* focus 되도 하이라이트 안되게  */
  outline: none;
}
.inputBox {
  background: white;
  /* 박스 수직위치 */
  height: 50px;
  /* 택스트 수직위치 */
  line-height: 50px;
  /* 보더 모서리 둥글게 */
  border-radius: 44px;
  text-align: center;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to bottom, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 44px 44px 44px 44px;
}
.addBtn {
  /* 아이콘을 변경하는 곳 */
  color: white;
  /* 세로를 가운데로 정렬 */
  vertical-align: middle;
}
</style>