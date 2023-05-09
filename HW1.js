

// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let humburgers = 2;
let fries = 0;

if(humburgers >= 4 && fries >= 1){
    console.log('Ми поїли')
}else{
    console.log('Ми йдемо в інше кафе')
}


// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price = 1000;

if(price < 1000){
    console.log('error')
} else if (price > 1900){
    console.log('error')
} else {
    console.log('ok')
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let price1 = 1006;

if(!(price1 >= 1000 && price1 <= 1900)){
    console.log('значення ціни товару не знаходиться в діапазоні')
}; 

//

let price2 = 2000;

if((price2 <= 1000 || price2 >= 1900)){
    console.log('значення ціни товару не знаходиться в діапазоні')
}; 


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let season = 6;

if(season == 1){
    console.log('winter')
}else if(season == 2){
    console.log('spring')
}else if(season == 3){
    console.log('summer')
}else if(season == 4){
    console.log('autumn')
}else {
    console.log('please enter number from 1 to 4')
}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 3;
let b = 2;
let c = 1;

if(a > b){
    if(b > c){
        console.log(`${b} це середнє число`)
    }else if(a > c){
        console.log(`${c} це середнє число`)
    }else {
        console.log(`${a} це середнє число`)
    }
} else{
    if (a > c) {
        console.log(`${a} це середнє число`)  
    }else if (b > c) {
        console.log(`${c} це середнє число`)
    }else {
        console.log(`${b} це середнє число`)
    }
}

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let dayOfTheWeek = 9;

switch(dayOfTheWeek){
    case 1:
        console.log('понеділок');
        break;
    case 2:
        console.log('вівторок');
        break;
    case 3:
        console.log('середа');
        break;
    case 4:
        console.log('четвер');
        break;
    case 5:
        console.log('пʼятниця');
        break;
    case 6:
        console.log('суббота');
        break;
    case 7:
        console.log('неділя');
        break;
    default:
        console.log('Неправильний номер');
        break;
}


// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let d = 9;
let e = 3;
let operation = '/'
let result;

switch(operation){
    case '+':
        result = d + e;
        break;
    case '-':
        result = d - e;
        break;
    case '*':
        result = d * e;
        break;
    case '/':
        result = d / e;
        break;
    default:
        console.log('Невалідний оператор');
        break;
}
console.log(result);



// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = "MolokO";
let vowels = /[aeiou]/gi;
let result1 = word.replace(vowels, "");

console.log(result1); 

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

let meters = 1000;
let kilometers = meters / 1000;

  if (meters >= 1000) {
    let kmString = kilometers.toFixed(3); //округляємо до 3 знаків після коми
    let lastDigit = parseInt(kmString[kmString.length - 1]); //вираховуємо останню цифру з цілого числа, яке відображається в рядку kmString
    let kmSuffix = ' кілометрів';
    if (lastDigit === 1) {
      kmSuffix = ' кілометр';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      kmSuffix = ' кілометри';
    }
    console.log(`${meters} метрів це ${kmString}${kmSuffix}`);
  } else {
    console.log(`${meters} метрів це менше одного кілометра`);
  }