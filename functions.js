//"Create a function to add two numbers."
//Sol.1
function add(a,b) {
    return a + b;
}
console.log(add(10,10));

//"Create a function that returns the square of a number."
//Sol.2
function square(n){
    return n * n;
}
console.log(square(5));
console.log(square(-5));
console.log(square(5.9));

//"Create a function to calculate the factorial."
//Sol.3
function factorial(n){
    let result = 1;
    for(let i = 2; i<=n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));

//"Create a function to check for a prime number."
//Sol.4
