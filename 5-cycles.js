//while - поки умова в дужках істина виконуй те що у фігурних дужках

let num = 50;

while(num < 90){
    console.log(num); // infinity loop
}

let num1 = 80;

while(num1 < 90){
    console.log(num1); //кожен раз після консоль лога 80 збільшується на 1 поки не дійде до 90
    num1++;
}

//do - while

let num2 = 80;

do{
    console.log(num2);
    num2++;
}while(num2 < 90)

// while та do-while в сайпресі не працюють

// for
// i - це ітератор

for(let i = 1; i < 8; i++){  // перше твердження - те з чого почнеться цикл, друге - те на чому зупиниться цикл, третє - крок, з котрим буде проходити цикл
    console.log(i)
}

num = 10
for(let i = 1; i < 8; i++){
    console.log(num);
    num++; //використ тільки для виводу в консоль
}   

num = 0
for(let i = 0; i < 8; i++){
    if(num === 5){
        break; //continue
    }
    console.log(num);
    num++;
}

//цикл всередині цикла

for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
    
    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`); // i, j, j, j, i, j, j, j, i, j, j, j
    }

}