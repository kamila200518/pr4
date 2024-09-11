'use strict';


function Nunber(a, b) {
    if (a > b) {
        [a, b] = [b, a]
    }

    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            alert(i);
        }
    }
}
let a = parseInt(prompt("Введите число а"));
let b = parseInt(prompt("Введите число b"));
Nunber(a, b);


let i = 0;
while(i < 3){
    alert(i);
    i++;
}


function getValidNumber() {
    let number;
  
    while (true) {
      number = prompt("Введите число больше 10:");
      if (number === null) {
        return null; 
      }
      number = parseInt(number);
      if (!isNaN(number) && number > 10) {
        return number; 
      } 
    }
  }
  
  let result = getValidNumber();
  
  if (result !== null) {
    alert("Ваше число:" + result); 
  }

let m  = Number(prompt("Введите число"));
let n = Number(prompt("Введите число"));

function min(m, n) {
    if (m < n) {
      return m;
    } else {
      return n;
    }
  }

  alert(min(m,n));





  const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
};

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);


let age = Number(prompt("Сколько лет?")); 

function checkAge(age){ 
    return age > 18 ? true : confirm('Родители разрешили?');  
} 

alert(checkAge(age))