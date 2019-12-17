<template> 
<section>
    <transition-group name="list" tag="ul">
        <!-- 리액트처럼 v-for 하면 v-bind:key를 꼭 해줘야함 주위해야 할 건, python와 반대로 index가 뒤쪽에 위치한다 -->
        <!-- <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">  -->
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow"> 
        
            <!-- aria-hidden 하면 tree에서 접근 못하게 한다는데 왜 필요하지? -->
            <i class="checkBtn fa fa-check" aria-hidden="true"></i>
            {{todoItem}}
            <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </span>
        </li>
    </transition-group>
</section>
</template> <script>
export default {
  props: ["propsdata"],

  // 더 이상 필요가 없음 위에서 데이터 처리 예정
  //   data() {
  //     return {
  //       todoItems: []
  //     };

  // 상위 컴포넌트에서 해결할거니깐 app.vue로 옴기기
  //   created() {
  //     if (localStorage.length > 0) {
  //       for (var i = 0; i < localStorage.length; i++) {
  //         this.todoItems.push(localStorage.key(i));
  //       }
  //     }
  //   },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeTodo", todoItem, index);
    }
  }
};
</script>
<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 44px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 여기서 부터는 animation name="list" 니까, 다 list-머시기 이렇게 되어 있음
https://vuejs.org/v2/guide/transitions.html*/
/*-time은 공식문서에서 나오지도 않는다 뭐지?*/
.list-time {
  display: inline-block;
  margin-right: 100px;
}
/*인덱스가 변경 될 때*/
.list-move {
  transition: transform 10s;
}

/* 새로 에드/제거 할 때*/
.list-enter-active,
.list-leave-active {
  transition: all 1s; /* 사실 이거 -enter, -leave-to에 넣어도 된다.*/
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-300px); /* 포지션 변경*/
  transition: all 1s;
}
</style>