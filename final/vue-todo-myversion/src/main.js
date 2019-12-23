// 이 파일 알아서 깔림
import Vue from 'vue'
import App from './App.vue'
// 이름 붙여도 되고 안해도 되고
let firstapp = new Vue({
  el: '#app',
  render: h => h(App)
})
