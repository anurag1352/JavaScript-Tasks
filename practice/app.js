//Problem.1
console.log("Hello World");

//Problem.2
function sum(a,b){
    const sum = a + b;
    console.log(sum);
}
sum(8,9);
sum(8,-9);
sum(8,0);
sum(-8,-10);
sum(-8,1.05);
sum(9.8,1.05);

//Problem.3
function area(length, width){
    if(length <= 0){
        throw new RangeError("length should be positive number");
    }
    if(width <= 0){
        throw new RangeError("width should be positive number");
    }
    const area = length * width;
    console.log(area);
}
area(10,10);
// area(10,-10);
// area(10,-10.9);
// area(-10.1,-10.1);
// area(-10,-10);
area(350,10);

//Problem.4
function number(a){
    const remainder = a %2 ;

    if(remainder === 0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(number(31));
console.log(number(-30));
console.log(number(0));

//another Way
function number2(a){
    return a%2 === 0 ? "even" : "odd";
}
console.log("number2");
console.log(number2(31));
console.log(number2(-30));
console.log(number2(0));


//Another Way.
// let num = 21;
// if(num %2 ===0){
//     console.log("Num is even");
// }else{
//     console.log("num is odd");
// }

//Another way
function number3(a){
switch(a % 2){
    case  0:
    console.log("even");
    break;
    case 1:
    case -1:
        console.log("odd")
    default:
    console.log("Invalid input");
  }
}
console.log("number 3")
number3(31);
number3(-30);
number3(0);

//Problem.5
function smallestNumber(a,b,c){
    if(a < b, a < c){
        console.log("a is smallest");
    }else if(b < a, c > b){
        console.log("b is smallest");
    }else{
        console.log("c is smallest");
    }
}
smallestNumber(5,8,9);
smallestNumber(4,1,3);
smallestNumber(4,4,3);
smallestNumber(-4,4,3);
smallestNumber(-4,4,0.3);
smallestNumber(-3,3,4);

function smallestNumber2(a,b,c) {
    let smallNumber = a;
    if(b < smallNumber){
        smallNumber = b;
    }
    if(c < smallNumber){
        smallNumber = c;
    }
    return smallNumber;
}

console.log("smallestOfThree2");
smallestNumber2(5,8,9);
smallestNumber2(4,1,3);
smallestNumber2(4,4,3);
smallestNumber2(-4,4,3);
smallestNumber2(-4,4,0.3);

//Problem.6
//sol.1
let str = "anurag";
let newStr = str.split('').reverse().join('');
console.log(newStr);

//sol.2
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("software development"));

//sol.3
function reverse(str){

    if(typeof str !== 'string'){
        throw new Error("Only string are allow");
    }
    let reversed = '';
    for(let i = str.length -1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverse("This is reverse"));

//Problem.7
//Sol.1
function factorial(integer){

    if( integer < 0){
        throw new Error("Input number should be grater or equal to zero");
    }
    if(typeof integer ==  "string"){
        throw new Error("string is not valid enter a integer");
    }
    let result = 1;
    for(let i=1; i <= integer; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(0));
// console.log(factorial(-10));
//console.log(factorial("anurag"));

//Sol.2 => recursion.
function calculateFactorialUsingrecusrsion(integer){
    if( integer < 0){
        throw new Error("Input number should be grater or equal to zero");
    }
    if(integer === 0 || integer === 1){
        return 1;
    }
return integer * calculateFactorialUsingrecusrsion(integer - 1);
}
console.log(calculateFactorialUsingrecusrsion(5));
console.log(calculateFactorialUsingrecusrsion(0));