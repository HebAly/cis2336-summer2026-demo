function myFirstFunction(){
    alert('Thank you so much!');
}
// declare variables: let, const

let age = 28; 
console.log(age);
age = 29;
console.log(age);

const birthYear = 1985;
console.log(birthYear);

// rule of thumb:
// 1. always declare variable by using "let" or "const";
// 2. always use "const" if the value should not be changed.
// 3. only use "let" if you can't use const

// rules of naming variables
// 1. use letters, numbers, $, _;
// 2. DO NOT name starting with number. 
// case sensitive: y != Y
// DO NOT use key words or any reserved words:let var const
// naming convention (camelCase): studentName, tempLocal

// primitive type: simplest form of data; 
// reference type: objects such as array, function, date,... with complex structure

// 1. primitive type:

// number
let height = 24;
let temprature = 80;

// string
let greeting = 'Hello';
let response = "Hello there!"

// boolean: true or fals
let isStudent = true;
let hasLicense = false;

// NULL
let emptyVar = null;
console.log(emptyVar);

// undefined
let notAssigned;
console.log(notAssigned);

// operations with variables
// 1. arithmetic: +, -, *, /...
let a = 5;
let b = 8;
let sum = a + b;
let diff = a - b;
let product = a * b;
let div =  a / b;
console.log(sum, diff, product, div);  

// 2. string concatenation
let firstName = 'Jone';
let lastName = 'DOE';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// 3. increment and decrement
let counter = 0;
counter ++;
console.log(counter);
counter --;
console.log(counter);

// 4. compound assignment: +=, -=, *=, /=
let score = 100;
score += 5;  // score = score + 5;
console.log(score);
score -= 10;

// 5. comparison: >, <, >=, <=, !=, ==, ===
let x = 10;
let y = 20;
let z = '10';
console.log(x>y);
console.log(x==z); // compare the value
console.log(x===z); // string compare the value and the type

//6. logical operation (&&, ||, !)
let isAdult = true;
let isMember = false;
console.log(isAdult&&isMember);
console.log(isAdult||isMember);
console.log(!isMember);

// 7. operation involving numbers and strings
let result1 = 3 + 2;
let result2 = '3' + 2;
console.log(result1,result2);
let result3 = '3' - 2;
console.log(result3);
let result4 = '3' / 2;
let result5 = '3' * 2;
console.log(result4,result5);

let result6 = 'four' / 2;
console.log(result6);

// implicit conversion
let result7 = '5' - true;
let result8 = '5' - false;
console.log(result7,result8);

// unary plus (+): convert a string into a number;
let result9 = + '3'; 
let result10 = + '3' + 2;
console.log(result9, result10);

//
let price = '10';
let tax = 2;
let total = + price + tax;

// syntax for conditional statements
//1. if...else...
if (total==12){
        console.log('You are right.')
}else{
    console.log('You are wrong.')
}
// 2. if ... else if ...else
let numScore = 56;
if (numScore > 90){
    console.log('A');
}else if (numScore>80){
    console.log('B');
}else if(numScore>70){
    console.log('C');
}else{
    console.log('Failed!');
}

// switch: use switch to select one of several code blocks to excute
function getSeason(number){
    switch(number){
        case 1: console.log('Winter'); break;
        case 2: console.log('Spring'); break;
        case 3: console.log('Summer'); break;
        case 4: console.log('Winter'); break;

        default: console.log('Invalid number');
    }
}
getSeason(3);

// loop:
// for loop: for (initialization, condition, post-loop operation)
let sumScore = 0;
for (let i = 1; i<=10; i++){
    sumScore = sumScore + i;
    console.log(sumScore);
}

// while loop
let count1 = 10;

while(count1 < 10){
    console.log(count1);
    count1 ++;
}

// do.. while
do {
    console.log(count1);
    count1 ++;
} while (count1 < 10);


// reference data: array, function, object, date, complex structure with properties and methods

// arrays:
const years = [1855, 2025, 1297];
const countries = ['US', 'UK','CN','JP'];

const year1 = years[0]; // 0 indexed!
const year3 = years[2];

// const years = [2006, 2180, 2350];
years[0] = 2000;

// Array destructuring --extract the element
let [Y1, Y2] = years;
let [ , , Y3] = years;
console.log(Y1,Y2, Y3);

// multi-dimentional array
const fruitPrice = [
    ['banana','apple','strawberry','pear'],
    [0.5, 2, 4, 2]
];

const priceStrawberry = fruitPrice[1][2];
console.log(priceStrawberry);

const mixArray = [2, 'UH', 200];

// iterate the array
for (let i = 0; i<years.length; i++){
    let year_i = years[i];
    console.log(year_i);
}
// for of loop to iterate an array
for(let yr of years){
    console.log(yr);
}

// array methods: length, add, delete, shift, ...
let cities = ['Houston', 'Paris', 'Dallas','Tokyo'];
let lenCities = cities.length;
console.log(lenCities);
let lastCity = cities.pop(); // remove the last element
console.log(cities);
let newCity = cities.push('Tokyo'); // add as the last element
console.log(cities);

let citiShift  = cities.shift(); // shift to the left, remove 1st element
console.log(cities);

let newCity2 = cities.push('Austion');
console.log(cities); // before splice
let citiDelete = cities.splice(1,3);
console.log(cities) // after splice

let newCity3 = cities.push('Austin');
console.log(cities); // before
delete cities[1]; 
console.log(cities); // after

// objects. 
// 1. built-in object
const myPi = Math.PI;
let sqrNum = Math.sqrt(9);
const newDate =  new Date();

// create own objects
const footballClub = {
    name: 'Coogs',
    founded: 1982,
    stadium: 'TDECU',
    location: {
        country: 'US',
        city: 'Houston'
    } 
};

// extract property of an object: ., []
let fName = footballClub.name;
let fYear = footballClub['founded'];

let {name, founded} = footballClub;
console.log(name, founded); 


// JSON data. It is a programming language independent data format.
const vacaPlan = '{"destination":"Hawaii", "duration": 10, "travel cost": 2000}';
// convert JSON string into a JavaScript ojbect:
const vacaPlanObj = JSON.parse(vacaPlan);

let vacaDestination = vacaPlanObj.destination;
console.log(vacaDestination);

// Function
function subTotal(price, quantity){
    return price * quantity;
}

let result1 = subTotal (10, 3);
console.log(result1);

// let result2 = subTotal(10);

function foo(a,b=20){
    return a+b;
}
let test1 = foo(2,3); // return 5
let test2 = foo(3); // return NaN

let test3 = foo(3);
console.log(test3);

// rest parameter
function concatenate(...args){

    let s = "";
    for (let a of args){
        s = s + a + ' ';
   
    }
    return s;
}
let girls = concatenate("Lily", "Amy","Zoe", "Jenny");
let boys = concatenate('Bob', 'Tom', 'Kevin', 'Jamal', 'Tonny','Jack');

console.log(girls);
console.log(boys);

// callback function: function passed into another function as a parameter
function calculateTotal(price, quantity, tax){
    let subTotal = price * quantity;
    return subTotal + tax(subTotal);
}

const calcTax = function(subTotal){
    let taxRate = 0.05;
    let tax = subTotal * taxRate;
    return tax;
} 

// call the function
let temp = calculateTotal(50, 5, calcTax);
console.log(temp);



// function

function foo1(a,b){
    return a+b;
}

let result = foo1(2,4);
console.log(result);

function sayHello(){
    console.log('Hello!');
}
sayHello();

function foo2(a=10,b=20){
    return a+b;
}

let result2 = foo2(2,3);
console.log(result2);
let result3  = foo2(2);
console.log(result3);

// random number of parameters: 
// use "..." the rest parameter
function sumAll(...numbers){
    let total = 0;
    for (let number of numbers){
        total += number; // total = total + number
    }
    return total;
}

let totalSum1 = sumAll(2, 5, 6, 8, 201);
console.log(totalSum1);
let totalSum2 = sumAll(3, 4);
console.log(totalSum2);

// callback function: 
function sum(a, b, callBack){
    let result = a + b;
    callBack(result);
}
function displayResult(result){
    console.log('Result is:' + result);
}
sum(2,5, displayResult);

// nest function: 

let applePurchase = totalPrice(2, 10);
console.log(applePurchase);

function totalPrice(price, amount){
    let totalAmount = price * amount;

    //nest function
    function tax(totalAmount){
            let tax = totalAmount * 0.08;
            return tax;
    }
    let taxAmount = tax(totalAmount);
    return totalAmount + taxAmount;

}

// function constructor
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello, my name is: " + this.name + " and I'm " + this.age + " years old." );
    }

}
let cust1 = new Person('Bob',20);
let cust2= new Person('Tom',18);
cust1.greet();
cust2.greet();

// JS hoisting
var x;
x = 10;
x +=5;
console.log('x=' + x);

y = 10;
y+= 5;
console.log('y=' + y);
var y;

z -= 5;
console.log('z=' + z);
var z = 10;

// arrow function 

// in regular way
function add(a,b){
    return a+b;
}

// in arrow way
const addArrow = (a,b) => a + b;

// no parameter arrow function
function greetings(){
    return "Hello!";
}
const greetingsArrow = () => 'Hello';

// one parameter arrow function
function square(n){
    return n * n;
}
const squareArrow = n => n * n;

// multiple line of execution
function multiply (a, b) {
    const result = a * b;
    return result;
}

const multiplyArrow = (a, b) => {
    const result = a * b;
    return result;
}

// function scope /local scope
let c = 0;
outer();

function outer(){
    function inner(){
        // console.log(a);
        let b = 40;
        c = 56;
    }
    inner();
}

let a = 34;
// inner();
console.log(c);
//console.log(b);

// block scope: if{} block, for{} block
for (let i = 0; i < 20; i++){
    const temp = 2;
}
// console.log(i); 
// console.log(temp);

const isStudent = true;
if(isStudent){
    const discount = 0.2;
}
// console.log(discount);

// closure
function createCounter(){
    let count = 0;
    function counter(){
        count += 1; // count = count + 1;
        console.log(count);
    }
    return counter;
}

const counter1  = createCounter(); // create a counter
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();

const counter2  = createCounter();
counter2(); // output 1
counter2(); // 
counter2();
counter2();
counter2();










