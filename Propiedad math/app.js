console.log(Math);

let numberExample = 90.9,
    numberExample2 = 30,
    numberExample3 = 100.
    numberExample4 = 5;

console.log(Math.abs(numberExample));
console.log(Math.ceil(numberExample));
console.log(Math.floor(numberExample));

console.log(Math.min(numberExample, numberExample2, numberExample3, numberExample4));
console.log(Math.max(numberExample, numberExample2, numberExample3, numberExample4));


console.log(Math.pow(numberExample4,3));

console.log(Math.random(1,100));
console.log(randomNumber(2,10));

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}


