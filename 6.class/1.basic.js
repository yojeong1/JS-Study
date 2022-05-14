//객체를 쉽게 만들 수 있는 템플릿
//1. 생성자 함수(더이상 쓰이지 XX)
//2. class (최신!!)

//생성자 함수 -> Class
class Fruit {
  //생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

//apple 이라는 객체는 Fruit라는 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange 이라는 객체는 Fruit라는 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
apple.display();
