// 실습 #1 - `todo-footer` 컴포넌트 전역 등록
Vue.component('todo-footer', {
  template: '<p>This is another child GLOBAL component</p>'
}

)

// const comp = {
//   template: '<p>This is another child local component</p>'
// }


var app = new Vue({
  el: '#app',
  data: {
    message: 'This is a parent component'
  },

  components: { // s 꼭 붙여야 실행됨
    'todo-list': {
      template: '<p>This is another child local component</p>'
    }
  }
  // 실습 #2 - `todo-list` 컴포넌트 지역 등록
  // <p>This is another child local component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
});
