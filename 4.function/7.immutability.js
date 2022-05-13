// 함수 내부에서 외부로부터 주어진 인자 값을 변경하는거 XX
//상태 변경하려면 새로운 상태를 만들어서 반환해야 함
function display(num) {
  num = 5; // XXXXXX
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'hi'; // 이렇게 하면 XXXXX , 외부로부터 주어진 인자를 내부에서 변경하면 안됨
  console.log(obj);
}
const yojeong = { name: 'yojeong' };
displayObj(yojeong);
console.log(yojeong);
