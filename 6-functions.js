let a = 5;
let b = 3;
let c;

c = a + b;

console.log(c)

// some code

a = 8;
b = 12;

c = a + b;
console.log(c);

function sum(a, b){ //параметри
    let c = a + b;
    return c;       // код після ретурну не використовується
    console.log(c)
}

console.log(sum(8, 12)) //аргументи

//іменні, анонимні, стрілочні, колбек, властивість якогось обʼєкту

//анонимна фунція:

function (a, b){ 
    let c = a + b;
    console.log(c)
} //неправильне

const annoimFunc = function (a, b){ 
    let c = a + b;
    console.log(c);
}

annoimFunc(1,2);

const arrowFunc = (a, b) => {
    let c = a + b;
    console.log(c)
}

arrowFunc(1, 2) //стрілочна функція

//зробити функцію більше універсальною - надати дефолтне значення

const funcWithDefaultParam = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaultParam(3, 5))
console.log(funcWithDefaultParam(3)) // бо b по дефолту 2

console.log(Date())

const myRequesttWithDate = (field1, timestamp = Date()) => {
    let requestBody = {
        someData: 1,
        SomeData2: 2,
        timestamp: ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}

console.log(myRequesttWithDate('qweqwe', '233232'))
console.log(myRequesttWithDate('qweqwe'))

const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if(i == 6){
            return 'qweqw'  // коли дійде до 6, аутпут завершиться і виведе те що написано після ретурн
        }
    }
}

console.log(playWithReturnFunc())


// callback функції - штучні затримки в коді

function first(){
    console.log('First')
}

first();

function someFunc(){
    console.log('hello')
}
setTimeout(someFunc, 5000)

function first1(){
    setTimeout(function(){     //анонімна функція колбек, яка виконується при таймауті
        console.log('First')
    }, 5000)
}

function second (){
    console.log('Second')
}
first1();
second();

function someFunctionWithCallback(param1, callbackFunction){
    console.log(`Here is my parameter: ${param1}`)
    callbackFunction();
}

someFunctionWithCallback('parapaasd', function(){
    console.log('Text from callback')
})

function it (testDescription, testActions){
    console.log(`Here is my test description: ${testDescription}`);
    testActions();
}

// =

it('Auth test', ()=> {
                         //це колбек функція яка має виконатись в певному місці в певному порядку
})