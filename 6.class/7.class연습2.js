//정직원과 파트타임 직원을 나타낼 수 있는 클래스 만들기
//직원들의 정보: 이름, 부서이름, 한달 근무 시간
//매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
//정직원 : 시간당 10,000원
//파트타임 : 시간당 8,000원
class Workers {
  constructor(name, department, time, payRate) {
    this.name = name;
    this.department = department;
    this.time = time;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.time * this.payRate;
  }
}
class FullTimeWorker extends Workers {
  static PAY_RATE = 10000;
  constructor(name, department, time) {
    super(name, department, time, FullTimeWorker.PAY_RATE);
  }
}

class PartTimeWorker extends Workers {
  static PAY_RATE = 8000;
  constructor(name, department, time) {
    super(name, department, time, PartTimeWorker.PAY_RATE);
  }
}
const aWorker = new FullTimeWorker('a', 'accountant', 40);
const bWorker = new PartTimeWorker('b', 'accountant', 20);
console.log(aWorker.calculatePay());
console.log(bWorker.calculatePay());
