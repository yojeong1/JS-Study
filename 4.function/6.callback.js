//콜백 함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달될 action은 콜백함수임
//전달될 당시에 함수를 바로 호출해서
//호출한 값을 전달하는게 아니라 함수를 가리키고있는 함수의 참조값이 전달된다.
//그래서 함수는 calculator안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply);
