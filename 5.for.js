//for문 = 반복문
//for(변수선언문; 조건식; 증감식) { }
//실행순서 
//1. 변수선언문
//2. 조건식의 값이 참이면 {}를 실행
//3. 증감식을 수행
//4. 조건식이 거짓이 될때까지 2번과 3번을 반복

//연습!!
//i가 0일때 3이 될때까지 반복해준다, 반복할때마다 i를 1개씩 증가시켜준다
for(let i = 0; i<3; i++ ) {
    console.log(i);
}

//for문 안에 또 for문을 쓸 수 있다!

for(let i = 0; i<3; i++ ) {
    for(let j = 0; j<3; j++) {
        console.log(i, j);
    }
}

 
//무한루프에 빠지지않게 만들어야한다!!!

//반복문을 제어할 수 있는 2가지 1. continue 2. break;

for(let i = 0; i < 15; i++){
    if(i === 5) {
        console.log('hello!!');
        break;
    }
    console.log(i);
}
//break는 특정한 조건에 그만두고싶을때 사용할 수 있다

//continue를 쓰면 5번째는 무시되고 바로 다음으로 넘어간다
for(let i = 0; i < 15; i++){
    if(i === 5) {
        continue;
        console.log('hello!!');
        break;
    }
    console.log(i);
}