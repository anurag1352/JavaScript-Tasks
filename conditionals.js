//"Check if a number is even or odd.",
//Sol.1
let sum = -20;
if(sum %2 === 0){
    console.log("Sum are even");
} else{
    console.log("sum are odd")
}


//"Check if a number is positive, negative, or zero.",
//Sol.2
let num = -10;
if(num > 0){
    console.log("number is positive");
} else if(num === 0){
    console.log("number is equal to zero");
} else{
    console.log("number is negative");
}

//"Check if a number is divisible by 3 and 5.",
//Sol.3
let divi = 45;
// if(divi %3 === 0){
//     console.log("divisible by 3");
// } else if(divi %5 === 0){
//     console.log("divisible by 5");
// } else {
//     console.log("Not a valid input");
// }

if(divi %3 ===0 && divi %5 ===0){
    console.log("divisible by 3 and 5 both");
}else {
    console.log("not valid");
}

//"Use an `if...else` statement.",
//Sol.4
let age = 19;
if(age >= 18){
    console.log("you are eligible");
}else{
    console.log("you are not eligible");
}

//"Use an `if...else if...else` structure.",
//Sol.5
let numb = 35;
if(numb %3 === 0 && numb %5 === 0){
    console.log("Numb are divisible by both number 3 and 5")
} else if(numb %3 ===0){
    console.log("Number are divisible by 3");
}else if(numb %5 ===0){
    console.log("Number are divisible by 5");
}else{
    console.log("Not a valid number");
}

//"Check age eligibility for voting.",
//Sol.6
let eligibility = 18;
if(eligibility >=18){
    console.log("You are eligible for vote");
}else{
    console.log("you are not eligible for vote");
}

//"Find the largest of three numbers.",
//Sol.7
let n1 = 10;
let n2 = 15;
let n3 = 35;

if(n1 >= n2 && n1 >= n3){
    console.log("The largest number is:", n1);
}else if(n2 >= n1 && n2 >= n3){
    console.log("The largest number is:", n2);
}else {
    console.log("The largest number is :", n3);
}

//"Check if a character is a vowel or consonant.",
//Sol.8
