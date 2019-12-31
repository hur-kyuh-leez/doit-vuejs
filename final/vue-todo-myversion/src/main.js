// 이 파일 알아서 깔림
import Vue from 'vue'
import App from './App.vue'
// 이름 붙여도 되고 안해도 되고
let firstapp = new Vue({
  el: '#app',
  /*
  shorstands for...
   render: function (createElement) {
    // 맨날 좀 헷갈린다. 왜냐하면 자바스크립트에서 input이 function이 들어올 수 있다는 게 그리고 여기서 App은 위에서 import 한다. 
    return createElement(App); 
 } */
  render: h => h(App)
})
