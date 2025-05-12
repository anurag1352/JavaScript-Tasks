//"Print numbers from 1 to 10 using a `for` loop."
//Sol.1
for(let i =0; i<=10; i++){
    console.log(i);
}

//"Print even numbers from 1 to 20 using a loop."
//Sol.2
for(let i = 0; i <= 20; i += 2){
    console.log("even numbers : ", i);
}

//"Print odd numbers from 1 to 20 using a loop."
//Sol.3
for(let i = 1; i <= 20; i += 2){
    console.log("odd numbers : ", i);
}

//"Print numbers from 10 to 1 using a `while` loop."
//Sol.4
let num = 10;
while(num >= 1){
    console.log(num);
    num--;
}

//"Calculate the sum of numbers from 1 to 100."
//Sol.5
let sum = 90;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

//2nd Way.
let n = 20;
let output = (n*(n+1))/2 ;
console.log(output);

//"Print the multiplication table of a number."
//Sol.6
let table = 9;
for(let i = table; i <= table*10; i += table){
    console.log(i);
}

//"Calculate the factorial of a number."
//Sol.7
let number = 5;
let factorial = 1;
for(let i=1; i <= number; i++){
    factorial *= i;
}
console.log(factorial);

//"Print all prime numbers from 1 to 50."
//Sol.8
for(let num = 1; num <= 50; num++){
    let isPrime = true;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(num);
    }
}

//"Use a `do...while` loop."
//Sol.9
let count = 1;
do{
    console.log(count);
    count++;
}while(count <= 5);

//"Print the Fibonacci series up to `n` terms."
//Sol.10
let x = 10;
let a = 0 , b = 1;

console.log("Fibonacci series");
for(let i = 1; i <= x; i++){
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}