const apple = {
  name: 'apple',
  display: function () {
    //dispaly는 키, 값은 function ,
    console.log(`${this.name}:🍎`); //this를 꼭 써서 자기자신의 데이터에 접근해야한다. this.key 이런식
  },
};

apple.display();
//apple에있는 display가 출력됨
