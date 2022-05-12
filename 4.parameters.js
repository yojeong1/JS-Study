//매개변수의 기본값은 무조건 undefined
function add(a, b) {
  console.log(a);
  return a + b;
}
add();

//만약 아무값도 지정되지 않았을때 값을 지정하고싶다면!! (Default Parameters )
//기본값을 지정 후 값을 다시 지정하면 기본값이 무시되고 지정한 값이 출력된다
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  return a + b;
}
add(2, 2);

//Rest Parameters (몇개의 인자를 받아올지 모를때 쓰임)
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//만약 a, b는 그대로 받고 뒤부터 numbers로 받으면
function sum(a, b, ...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
