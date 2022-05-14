//Static 정적 프로퍼티, 메소드

class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //Class레벨의 메소드 (static을 붙이면 class 레벨 생성 가능)
  static makeRandomRFruit() {
    //클래스레벨의 메소드에서는 this를 할 수 없다. class 자체로는 아무것도 채워지지않은 그저 템플릿 상태라서
    return new Fruit('banana', '🍌');
  }
  //인스턴스 레벨의 메소드
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

//class 레벨은 그냥 바로 이렇게 출력 가능
const banana = Fruit.makeRandomRFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
//apple 이라는 객체는 Fruit라는 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange 이라는 객체는 Fruit라는 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
apple.display();

//Static 예제
Math.pow();
Number.isFinite(1);
