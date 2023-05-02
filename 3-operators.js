// +
// додавння рядків - конкотинація

console.log('arg' + ' - object')

// з числами - додавання

console.log(2 + 2)

// рядок + число = конкотинація

console.log(2 + '2') //=22

console.log(2 + + '2') //=4

//інкременти, декременти - збільшують або зменшують число на одиницю

let incr = 10
let decr = 10

// incr++;
// decr--; //постфіксна
// console.log(incr);
// console.log(decr);

// ++incr;
// --decr; //префіксна
// console.log(incr);
// console.log(decr);

console.log(incr++);
console.log(decr--); //без змін, бо ми спочатку використовуємо значення а потім виводимо

console.log(++incr);
console.log(--decr); // одразу змінюємо значення і потім виводимо

// оператори порівняння

console.log(5 < 2); //boolean
console.log(5%2); //остача від ділення

// console.log(2*4 = 8); // не правильний варіант. бо = це не дорівнює а присвоєння, щоб було дорівнює треба подвійний ==
console.log(2*4 == 8); //звичайне порівняння
console.log(2*4 == '8'); //звичайне порівняння
console.log(2*4 === 8); //строге дорівнює


//логічні оператори

let isChecked = true;
let isClosed = true;

console.log(isChecked && isClosed) // && - логічне І, порівняння. треба щоб обидва значення були однакові
console.log(isChecked || isClosed) // АБО, щоб було тру, треба щоб хоча б одне було тру, якщо всі фолс, тільки тоді фолс
console.log(isChecked && !isClosed) // ! - перетворює булеве значення на протилежне

let humburger = true;
let fries = false;

if (humburger&&fries){
    console.log('Я ситий')
}

let humburger1 = 5;
let fries1 = 1;

// if (humburger1&&fries1){
//     console.log('Я ситий')
// }

console.log(humburger1&&fries1) // виводить перше значення яке привело до false або останнє значення на якому завершилось

// 5 значень, які приводять до false
// 0, пустий рядок, null, undefined, NaN

// хочете щоб були фбо 3 гамбургери і кола або дві порції нагетсів і дві картоплі фрі

let humburgers = 2;
let cola = 2;
let nuggets = 2;
let fries2 = 2;

if(humburgers >= 3 && cola || nuggets >= 2 && fries2 >= 2){
    console.log('всі поїли')
}

