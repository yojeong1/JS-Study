// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}:π`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}:π`);
//   },
// };

//μ΄λ κ² λΉμ·ν κ°μ²΄κ° λ§μλ μ’ λ μ½κ² λ§λ€ μ μλ μμ±μ ν¨μλ₯Ό μ΄μ©!!

//μμ±μ ν¨μ

//μμ±μ ν¨μλ λλ¬Έμλ‘ λ§λ λ€
function Fruit(name, emoji) {
  this.name = name; // this.nameμ νκ²λλ©΄ μκΈ°μμ κ°μ²΄μμ nameμ΄λΌλ keyκ° μμ±λλ€, nameμ΄λ keyμ κ°μ μΈμλ‘ μ λ¬λ κ°μ΄ ν λΉλ¨
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
  //return this; //μλ΅κ°λ₯, μλ΅ν΄λ μλμΌλ‘ λ¦¬ν΄ν΄μ£ΌκΈ°λλ¬Έ
}
//μ΄λ κ² ννλ¦Ώμ λ§λ€μ΄λλ©΄ λΉμ·ν κ°μ²΄λ₯Ό μ½κ² λ§λ€ μ μλ€.

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π');
//μ΄λ κ² μ½κ²!

console.log(apple);
console.log(orange);
apple.display();
