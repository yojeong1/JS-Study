//논리연산자 
//&& 그리고
// || 또는
//! 부정
//!! 불리언값으로 변환

//num값이 0보다 크거나 같고 3보다 작을때만 출력
let num = 5;
if(num >= 0 && num < 3) {
    console.log('❤');
}
//출력되지 않음
//하지만 num을 2로 바꿔주면 조건이 충족돼서 하트가 출력됨


//numOr이 0보다 크거나 같거나 또는 6보다 작을때 ❣출력
let numOr = 9;
if(numOr >= 0 || numOr < 6) {
    console.log('❣');
}

//!부정, numNot이 7이 아니면 출력된다. 하지만 아래는 numNot은 7이기때문에 출력되지않음

let numNot = 7;
if(numNot != 7 ) {
    console.log('🍕');
}