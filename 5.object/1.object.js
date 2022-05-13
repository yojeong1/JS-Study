// object literal { key: value }
//new object ()
//object.create();
//key - 문자, 숫자, 문자열, 심볼 쓸 수 있음
//value - 원시값, 객체(함수) 쓸 수 있음

let apple = {
  name: 'apple',
  'hello-bye': '💛', // 문자열로 key작성 가능
  0: 1, //숫자로 key작성 가능
  ['hello-bye1']: '💚', //대괄호안의 문자열로 key작성 가능
};

//속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 1. 마침표 표기법
console.log(apple['hello-bye1']); // 2. 대괄호 표기법 (특수문자를 쓴 경우에 쓴다)

//뒤늦게 속성을 추가하고 싶으면!
apple.emoji = '🍎';
console.log(apple.emoji); // 1. dot 표기법 사용해도 출력 가능
console.log(apple['emoji']); // 2. 대괄호 표기법 사용해도 출력 가능 (항상 '' 이거써서 문자열로 감싸줘야함!!)

//속성을 삭제하고 싶을때
delete apple.emoji;
console.log(apple);
//delete emoji하고 출력해보면 사과 이모지 안나옴
