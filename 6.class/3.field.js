//접근 제어자 - 캡슐화, 외부에서 접근못하게!!
//private(#), public(기본상태)
//#을 붙이면 외부에서 접근도 못하고 출력도 안됨
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; //#field는 외부에서 접근이 불가능함
console.log(apple);
