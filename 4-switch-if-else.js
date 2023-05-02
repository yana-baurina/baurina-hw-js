if(4==9){
    console.log('Expression is true')
} else {
    console.log('E[pression is false')
} //false

if(4){
    console.log('Expression is true')
} else {
    console.log('E[pression is false')
} //true

let num = 50;

if(num < 49){
    console.log('error')
} else if (num > 100){
    console.log('some big number')
} else {
    console.log('ok')
}

// тринарний оператор - коли три аргумента в умові
let num1 = 500;
(num1 == 50) ? console.log('ok') : console.log('error');

//switch-case - коли нас цікавить пряме порівняння

let number = 54; 

switch(number){
    case 49:
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;
    case 51:
        console.log('Your value is 51');
        break;
    case 52:
        console.log('Your value is 52');
        break;
    default:
        console.log('This is default output');
        break;
}

// якщо купуєте BMW то виводити в консоль BMW, аналогічно для Audi, Mercedes, Ford

let car = BMW; 

switch(car){
    case 'BMW':
        console.log('я власник BMW');
        break;
    case 'Audi':
        console.log('я власник Audi');
        break;
    case 'Mercedes':
        console.log('я власник Mercedes');
        break;
    case 'Ford':
        console.log('я власник Ford');
        break;
    default:
        console.log('Поки хожу пішки');
        break;
}