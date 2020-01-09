
<!--
순서:
(1) template 
(2) script
(3) style 

중요한 내용:
v-on은 상위에 넣으면 반드시 emit를 하위에 넣어줘야 한다.
v-bind는 상위에 넣으면 반드시 하위에서 props: ["propsdata"] 이러한 형태로 데이터를 저장한다.


-->

<!-- Vue in HTML -->
<template>
  <div id="app">
    <!-- main js에서 #app 가르키는 곳. vue를 적용하라는 곳 -->
    <!-- TodoHeader 컴포넌트 넣음-->
    <TodoHeader2></TodoHeader2>
    <TodoHeader></TodoHeader>
    <!--TodoInput 컴포넌트 넣음. 하위 addTodo에 상위 "addTodo"를 내보냄-->
    <TodoInput v-on:addToDo="addToDo"></TodoInput>
    <!--TodoList 컴포넌트 넣음. 하위 removeTodo에 상위 "removeTodo" 내보냄. 그리고 상위 "todoItems"를 하위 컴포넌트인 TodoList propsdata 형식으로 내보냄-->
    <TodoList v-on:removeTodo="removeTodo" v-bind:propsdata="todoItems"></TodoList>
    <!--TodoFooter 컴포넌트 넣음. 하위 clearAll 내보냄 상위 "clearAll"를 내보냄-->
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    <LogIn></LogIn>
  </div>
</template>

<!-- VUE js -->
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader2 from "./components/TodoHeader2.vue";
import LogIn from "./components/LogIn.vue";

// 여기는 local component 방식
export default {
  // App의 data는 todoItems: array를 리턴함
  data() {
    return {
      todoItems: []
    };
  },
  // 함수에는...
  methods: {
    addTodo(value) {
      // 이렇게 데이터를 하나는 로컬에 하나는 todoItems에 두번 저장한다.
      localStorage.setItem(value, value); // .setItem(keyName, keyValue);
      this.todoItems.push(value);
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
  // import한 컴포넌트는 여기에 이렇게 정리한다.
  components: {
    TodoHeader, //책이랑 다르게 'TodoHeader': TodoHeader 이렇게 할 필요 없다. 왜냐하면 이게 더 intuitive 하다
    TodoInput,
    TodoList,
    TodoFooter,
    TodoHeader2,
    LogIn
  },
  // life cyle중 created 때 만약 localStorage에 있으면 todoItems에 넣어준다.
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
};
</script>

<!-- CSS style -->
<style>
/* body태그에는... */
body {
  /* 글자를 가운데로 정렬하고 */
  text-align: center;
  /* 배경색은... */
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