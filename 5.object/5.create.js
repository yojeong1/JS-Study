// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}:🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}:🍊`);
//   },
// };

//이렇게 비슷한 객체가 많을때 좀 더 쉽게 만들 수 있는 생성자 함수를 이용!!

//생성자 함수

//생성자 함수는 대문자로 만든다
function Fruit(name, emoji) {
  this.name = name; // this.name을 하게되면 자기자신객체에서 name이라는 key가 생성된다, name이란 key의 값은 인자로 전달된 값이 할당됨
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
  //return this; //생략가능, 생략해도 자동으로 리턴해주기때문
}
//이렇게 템플릿을 만들어두면 비슷한 객체를 쉽게 만들 수 있다.

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
//이렇게 쉽게!

console.log(apple);
console.log(orange);
apple.display();
