"use strict";

console.log("arr" + " - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;
    
// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log(2*4 === 8);

// Таблица приоритетов операторов: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
console.log(2 + 2 * 2 != 8);

// && - оба верны true 
// || - одно выражение верно
// !  - оператор отрицания, превращает в обратное


const isChecked = false,
      isClose = false;

console.log(isChecked && !isClose);