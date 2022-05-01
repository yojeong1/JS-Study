let a = 5;
a = -a;
//-a로 재설정하면 -1*5랑 같음 -> -5
console.log(a);
console.log(-a);

//부정은 앞에 ! 붙여준다
let boolean = true;  //true를 부정하고싶으면 
console.log(!boolean); //이렇게 앞에 !붙이면 false나옴
console.log(!!boolean); //false를 또 true로 바꾸고 싶으면 !를 또 붙인다