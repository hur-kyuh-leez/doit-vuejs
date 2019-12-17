
<template>
<div id=”app”>
 <TodoHeader></TodoHeader>
  <TodoInput v-on:addTodo="addTodo"></TodoInput>
  <TodoList v-on:removeTodo="removeTodo" v-bind:propsdata="todoItems"></TodoList>
  <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
</div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addTodo(value) {
      localStorage.setItem(value, value); // .setItem(keyName, keyValue);
      this.todoItems.push(value); // 이렇게 데이터를 하나는 로컬에 하나는 todoItems에 두번 저장한다.
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  components: {
    TodoHeader, //책이랑 다르게 'TodoHeader': TodoHeader 이렇게 할 필요 없다. 왜냐하면 이게 더 intuitive 하다
    TodoInput,
    TodoList,
    TodoFooter
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
};
</script>
<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  /* 살짝 input박스테두리가 진해짐 the boxy 해짐*/
  border-style: groove;
  /* 박스크기를200px로 */
  width: device-width;
}
button {
  /* 버튼이 박시해짐 */
  border-style: groove;
}
.shadow {
  /* 박스에 그림자를 주면서 입체감을 살림 */
  /* left top blureffect*/
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>