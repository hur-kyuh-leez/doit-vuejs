<template>
  <div>
    <div class="addTodo" v-on:keypress.enter="addtoItems">
      <input v-model="inputString" type="text" placeholder="What do you want to do?" />
      <button @click="addtoItems">add</button>
    </div>
    <div class="listTodo">
      <li v-for="(item, index) in items" :key="item">
        {{item}}
        <button @click="removeItem(index)">delete</button>
      </li>
    </div>
    <div class="Footer">
      <button @click="deleteAllItems">Delete All</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputString: "",
      items: []
    };
  },
  methods: {
    addtoItems() {
      this.items.push(this.inputString);
      this.inputString = "";
      console.log(this.items);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    deleteAllItems() {
      this.items = [];
    }
  }
};
</script>

<style scoped>
input {
  width: 90%;
  /* height: 3rem; */
}
</style>
