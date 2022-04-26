//if와 다르게 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우에 쓰임

let color = 2;

switch (color) {
    case 0:
        colorName = 'red';
        break;
    case 1:
        colorName = 'yellow';
        break;
    case 2:
        colorName = 'blue';
        break;
        }
console.log(colorName);  // blue가 출력됨, break를 걸어줘야 case별로 출력됨! red, yellow, blue 이렇게 막 넘어가지 않음!!


//26, 27을 S 사이즈로하고 싶을때!
//우선 할당을 해줌
let num = '26';
let size = 's';

switch (size) {
    case '26':
    case '27':
      size = 's';
      break;
    case '28':
      size = 'm';
      break;
}
console.log(size);

//범위 설정해준 조건에 맞지않을떄 else if같이 해줄 수 있는게 있음
//default:
//console.log();를 해주면 된다
let colorNum = 5;

switch (colorNum) {
    case 0:
        colorName = 'red';
        break;
    case 1:
        colorName = 'yellow';
        break;
    case 2:
        colorName = 'blue';
        break;
        default:
            console.log('another color');
        }
 
        