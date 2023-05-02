/*
   1. Прості типи aбо примітивні
    - String (текст)
    - int (число)
    - boolean (true, false)
    - null
    - undefined
    - symbol
    - bigint


-------
   2. Обʼєкти
   
   - обʼєкт {json}
   - спеціальні обʼєкти:
       -масиви, 
       -обʼєкт дати, 
       -регулярні вирази, 
       -exception/помилки
--------

*/

//цілі числа та плаваючі числа
let number = 5; 
let floatNumber = 5.5;

// infinity, not a number (NaN)
console.log(4/0)
console.log(-4/0)
//відповідь "інфініті" допомагає уникнути помилок(exception)

console.log('string' * 4); //NaN

//boolean

let isExist = true; //false

//null, undefined

console.log(qweqweqwe);

let value = null;
console.log(value); //null

let value2;
console.log(value2); //undefined

//object  -   ключі та їх значення
let obj = {};

let person = {
    name: "Dmytro",
    age: 28
};

let person1 = new Object();
person1.name = "Dmytro2" //json path
person1.age = 42

//console.log(person);
//console.log(person1);

//інтерполяція
console.log(`Name: ${person1.name}`)
console.log(`Age: ${person1.name}`)

let endpoint = 'help'
console.log(`https://someurl/${endpoint}`)

//масиви (array) - перелік елементів (можуть бути частиною обʼкта)
let arr = ['text', 'some text', 6, {name: 123}, []];
//console.log(arr);
console.log(arr[0]);
console.log(arr[4]);

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200]

let someArrObj = {
    0: 'Anna',
    1: 1000,
    2: 'Vlada',
    3: 1200
}
 console.log(salaryArr[0]);
 console.log(someArrObj[0]);

 let someArrObj2 = {
    a: 'Anna',
    b: 1000,
    c: 'Vlada',
    d: 1200
}
 console.log(`b2: ${someArrObj2["b"]}`);

 someArrObj2.b = 2000; //перезаписали значення

 console.log(`b2: ${someArrObj2["b"]}`);

 let someText = " Hello world! ";

// console.log(someText.length);
// console.log(someText.substring(0, 6));
 console.log(someText.toUpperCase());
 console.log(someText.toLowerCase());
 console.log(someText.indexOf('o')); //виводить перший індекс цієї букви
 console.log(someText.trim()); //видаляє табуляцію, пробіли, перенос рядка
 console.log(someText.charAt(5));
 console.log(someText[1]);

//додавання значення в масив
let myArr = [];

myArr.push("Доброго")
myArr.push("вечора")
console.log(myArr)
// console.log(myArr.length)
// console.log(myArr.join(" "))
console.log(myArr.pop()) // визначає і видаляє останній елемент в масиві
console.log(myArr)

let newObj = {
    a: 1,
    b: 2,
    c: 'bbvb'
}

console.log(newObj.a);
delete newObj.a
console.log(newObj);
console.log(newObj.c.length);

let someNum = 12.4
console.log(Math.round(someNum));

let resolution = "12.2px"
console.log(parseInt(resolution)); //дістати зі змінної ціле числе, наприклад зі стрінги
console.log(parseFloat(resolution)); //якщо цікавить повне значення

