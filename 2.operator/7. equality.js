//== 값이 같음
//!= 값이 다름
//=== 값과 타입이 둘다 같음
//!== 값과 타임이 다름

console.log(2 == 2);
console.log( 2 != 2);
console.log(2 == 3);

console.clear();
console.log(2 == '2');
console.log(2 === '2');

console.clear();
console.log(true == 1);
console.log(true === 1);
console.clear();


const obj1 = {
    name : 'yj',
};

const obj2 = {
    name : 'yj',
};
 

const obj3 = obj2; // obj3에 obj2를 할당을해주고
console.log(obj3 == obj2); //obj2와 3가 같은지 보면