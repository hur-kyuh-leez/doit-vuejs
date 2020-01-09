<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoAdd></TodoAdd>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./component/TodoHeader";
import TodoAdd from "./component/TodoAdd";
import TodoList from "./component/TodoList";
import TodoFooter from "./component/TodoFooter";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    TodoHeader,
    TodoAdd,
    TodoList,
    TodoFooter
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
