//while(조건){}
//조건이 맞으면 계속 실행한다, 조건이 false가 될때까지 무한정 코드를 실행

//5가 0보다 작을때까지 반복됨

let num = 5;
while(num >= 0) {
    console.log(num);
    num--;
}

//do while문, 무조건 한번은 실행하고 그뒤에 조건이 맞는지 확인한다
let myName = false;
do {
    console.log('everyone hello');
} while(myName);