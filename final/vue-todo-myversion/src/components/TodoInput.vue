<template>
  <div class="inputBox shadow">
    <!-- v-model은 데이터를 즉시 동기화 함(two-way data bindings on form), 그러하니 v-model는  data()를 부르는게 맞음 -->
    <!-- 텍스트로 구성된 입력을 만들고 v-model을 통해 two-way data binding을 한다. data는 data()에 있는 newTodoItem와 동기화 한다.
    그리고 입력 도우미에는 "add anything!" 글로 안내하고 만약 입력란안에서 엔터를 치면 addTodo를 실행해라-->
    <input type="text" v-model="newTodoItem" placeholder="add anything!" v-on:keyup.enter="addTodo" />

    <!-- i class에서 만들어진 버튼을 클릭을 하면 addTodo를 실행해라 -->
    <span class="addContainer" v-on:click="addTodo">
      <!-- fa fa-plus는 아이콘 추가임 -->
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
    <!-- 만약 showModal이 참일 때, 창을 닫으면 showModal을 거짓으로 바꿔라
    참고로 Modal은 이미 format이 정해져있다.-->
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
/* 여기 뭐지 Modal import 하고 component에 등록을 하는데 
정작 <template>에서 <Modal>을 찾을 수 없고 <modal>만 보인다. 
그런데도 잘 작동한다. Modal이 하나 다른점은 export default가 없다는 점?
https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case

camelCase in js
should be kebab-case in html

*/
import Modal from "./common/Modal.vue";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim(); //.trim remove unecssary blanks. ex)  "     Hello World!     " --> "Hello World!" 그런데 왜 아직 스페이스 하나는 등록이 될까?
        /* 여기서 addTodo는  v-on:addTodo 이다
         not v-on:addTodo 뒤에있는 "addTodo" */
        this.$emit("addTodo", value);
        //여기서 더 이상  localStorage를 안하고 상위에서 처리한다. localStorage.setItem(value, value); // .setItem(keyName, keyValue);
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