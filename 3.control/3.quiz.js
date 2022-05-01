//퀴즈 / num의 숫자가 짝수면 엄지, 홀수면 다운을 출력

let num = 2;

//if문을 이용

if(num % 2 === 0) {
console.log('👍');
} else {
    console.log('👎');
}

//ternary를 이용
num % 2 === 0 ? console.log('👍') : console.log('👎')