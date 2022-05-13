const obj = {
  name: 'jeong',
  age: '22',
};
// 코딩하는 시점에 정적으로 접근이 확정됨
obj.name;
obj.age;

//동적으로 접근하고 싶을때 대괄호 표기법으로 사용!
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));

//동적으로 키를 추가하고싶을때
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'student');
console.log(obj);

//삭제할때
function deleteKey(obj, key) {
  delete Object[key];
}
