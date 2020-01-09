<template>
  <header>
    <h1>This is Header of Header!</h1>
    <span class="buttonContainer" v-on:click="buttonWorking">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </header>
</template>
  

<script>
export default {
  methods: {
    buttonWorking() {
      alert("buttonWorking!");
    }
  }
};
</script>

<style scoped>
h1 {
  color: #cecece;
  font-weight: 1500;
  margin: 0; /* top side bottom*/
}
.buttonContainer {
  cursor: pointer;
}
</style>