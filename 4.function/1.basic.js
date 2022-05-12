//예제1번

function add(a, b) {
  console.log('function');
  return a + b;
}

const result = add(1, 2);
console.log(result);

//예제2번

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let lastName = 'jeong';
let firstName = 'hui';
console.log(fullName(firstName, lastName));

//함수는 수정하기 쉽고 유지보수 쉬움
