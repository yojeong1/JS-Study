//카운터 만들기
//0 이상의 값으로 초기화 한 뒤 호출될때마다 하나씩 숫자를 증가하 수 있는 카운터 만들기
//Counter 클래스 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }
  increase = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increase();
counter.increase();
console.log(counter.value);
