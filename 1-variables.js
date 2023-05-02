//let number = 5; можна змінювати
//const userScore = 1000; не можна змінювати. 

//зміна не може починатись на цифру та містити спец символи (окрім $_), 
//зміну не можна називати зерезервованими словами (error, class)
//паттерни стосовно назв змінних
// camelCase
// snake_case (частіше для констант)
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase

let nUmber =! number;

//як змінити змінну

let number = 5;
console.log(number)

number = 12;
console.log(number)

const userScore = 1000;
console.log(userScore)

userScore = 12;
console.log(userScore)

//властивості обʼєкта хоч і константа можуть бути змінені
const obj = {
    age: 20
}
console.log(obj)

//obj = 40;
//console.log(obj)

obj.age = 30
console.log(obj)

//var як let, але існє в памʼяті комп до того як була обʼявлена
//var може знаходитись під console.log

console.log(firstName)
var firstName = 'Yana'

//область видимості змінних
//let const доступні лише в межах блоку коду - {}
{
    let result = 50;
}
console.log(result)

//var доступен по всьому коду
{
    var result1 = 50;
}
console.log(result1);

//назви елементів
//

let a = 3000;
let b = 2000;

//1000 lines of code
console.log("Ширина авто: " + a + ", довжина: " + b)

let width = 3000;
let length = 2000;

//1000 lines of code
console.log("Ширина авто: " + width + ", довжина: " + length)

let vehicleBodyWidth = 3000;
let vehicleBodyLength = 2000;

//1000 lines of code
console.log("Ширина авто: " + vehicleBodyWidth + ", довжина: " + levehicleBodyLengthngth);

