//주어진 숫자만큼 0부터 순회하는 함수 만들기
//순회하면서 주어진 특정한 일을 수행해야함
//순회하는 숫자를 다 출력하고 싶음
//순회하는 숫자의 두배
//힌트 : function iterate(max, action)

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

iterate(5, log); //화살표 함수로 표현하면 iterate(5. (num) => console.log(num));

//-----두배로 하고싶을때

function doubleAndLog(num) {
  console.log(num * 2);
}

iterate(5, doubleAndLog); //화살표 함수로 표현하면  iterate(5, (num) => console.log(num * 2));

setTimeout(() => {
  console.log('3초뒤 함수가 실행');
}, 3000);
