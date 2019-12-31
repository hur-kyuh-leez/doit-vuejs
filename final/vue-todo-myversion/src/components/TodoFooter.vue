<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearAll">ClearAll</span>
  </div>
</template>
<script>
export default {
  methods: {
    clearAll() {
      // 상위 "clearAll"에 아무것도 없이 보낸다.
      this.$emit("clearAll");
    }
  }
};
</script>
<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 30px;
  line-height: 30px;
  background-color: white;
  border-radius: 44px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: black;
}
.clearAllBtn:hover {
  cursor: default;
}
</style>