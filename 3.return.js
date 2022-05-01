function add(a, b) {
  return a + b;
}
//리턴을 하지않으면 자동으로 undefined가 나옴
const result = add(1, 2);
console.log(result);

//return을 함수 중간에 써서 종료시키기
//원하는 조건이 아닐때 return을 써서 함수를 종료시킨다
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(12);
print(-12);
