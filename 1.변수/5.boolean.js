//Boolean


//거짓값
console.log(!!0);   //0은 거짓
console.log(!!-0);  //-0도 거짓
console.log(!!''); //비어있는것도 거짓
console.log(!!null); //null은 거짓
console.log(!!undefined); //undefined 거짓
console.log(!!NaN); //NaN 거짓

//참인값
console.log(!!1);  //1은 참
console.log(!!-1); //-1 참
console.log(!!'text'); // 비어있지 않은 문자열
console.log(!!{});  //비어있는 오브젝트
console.log(!!Infinity); //인피니티
