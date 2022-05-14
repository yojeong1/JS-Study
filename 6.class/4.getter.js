//접근자 프로퍼티(Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('희', '정');
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '철수'; //이렇게 할당을하면 set이 호출된다
