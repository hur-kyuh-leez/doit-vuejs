<template>
  <Login>
    <div v-on:keypress.enter="onSubmit">
      <h2>로그인</h2>
      <input type="text" v-model="login.login" placeholder="아이디" />
      <input type="text" v-model="login.password" placeholder="패스워드" />
      <p>
        <button v-on:click="onSubmit">Log In</button>
      </p>
    </div>
  </Login>
</template>

<script>
export default {
  data() {
    return {
      login: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      alert("로그인 완료!");
    }
  }
};
</script>
<style scoped>
div {
  padding: 100px;
}
h2 {
  margin: auto;
  width: 100px;
  margin-bottom: 10px;
}
input {
  height: 10px;
  width: 80px;
}
button {
  color: #fff;
  font-weight: 500;
  font-size: 1.2em;
  margin: 0;
  width: 10rem;
  height: 2rem;
  border-radius: 44px;
  vertical-align: middle;
  background: blue;
  cursor: pointer;

  /* background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  ); */
}
button:hover {
  opacity: 0.85;
}
</style>