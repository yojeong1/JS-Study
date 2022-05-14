//class의 상속, 공통된것

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!!!');
//   }
//   sleep() {
//     console.log('잔다!!!!!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!!!');
//   }
//   sleep() {
//     console.log('잔다!!!!!');
//   }
//   play() {
//     console.log('놀자놀자');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!!!');
  }
  sleep() {
    console.log('잔다!!!!!');
  }
}
class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  play() {
    console.log('놀아줘요~');
  }
}
const dog = new Dog('까망이');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
