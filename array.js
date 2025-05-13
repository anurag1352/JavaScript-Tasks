//"Create an array of 5 numbers and print it."
//Sol.1
let arr = [1,2,3,4,5];
console.log(arr);

//"Access and modify array elements."
//Sol.2
let fruits = ["apple", "mango","banana"];
fruits[1] = "pineapple";
console.log(fruits);

//"Find the length of an array."
//Sol.3
let length = ["anurag","angel","sharma"];
console.log(length.length);
console.log(length.length[1]);

//"Add an element to the end of an array."
//Sol.4
let add = ["monday","tuesday","wednesday","thurday","friday","saturday"];
console.log("Before adding");
console.log(add);

console.log("after adding");
add.push("sunday");
console.log(add);

//Remove the last element from an array.
//Sol.5
let year = ["jan","feb","mar","apr","may","june"];
console.log("Before delete");
console.log(year);

console.log("after deleting");
year.pop();
console.log(year);

//Add an element to the beginning of an array.
//Sol.6
let startAdd = [1,2,3,4,5,6,7];
console.log("Before adding");
console.log(startAdd);

console.log("after adding");
startAdd.unshift(0);
console.log(startAdd);

//Remove the first element of an array.
//Sol.7
let startDlt = [1,2,3,4,5,6,7];
console.log("Before deleting");
console.log(startDlt);

console.log("after deleting");
startDlt.shift();
console.log(startDlt);

//Loop through an array using `for`.
//Sol.8
console.log("Loop with array:")
let fruit = ["apple","mango","litchi"];
for(let i = 0; i <fruit.length; i++){
    console.log(fruit[i]);
}

//Loop through an array using `forEach`.
//Sol.9
console.log("forEach Loop with array:")
let animal = ["dog","cat","lion","tiger"];

animal.forEach(function(ani) {
    console.log(ani);
});

//Find the largest number in an array.
//Sol.10
let large = [1,2,3,4,55,6,77,8,99,9];
let max = Math.max(...large);
console.log(max);

//Find the smallest number in an array.
//Sol.11
let small = [1,2,3,-9,0];
let min = Math.min(...small);
console.log(min);

//Sort an array of numbers.
//Sol.12
let sorting = ["xyz","abc","fgh"];
let count = [9,4,7,5,3,1,0,6,5,2];
count.sort();
console.log(count);

sorting.sort();
console.log(sorting);

//Reverse an array.
//Sol.13
let color = ["Haryana","Delhi","Noida","Pune"];
color.reverse();
console.log(color);

//Merge two arrays.
//Sol.14
let city = ["panchkula","ludhiana"];
let state = ["Haryana","punjab"];
let Merge = state.concat(city);
console.log(Merge);

//Check if an element exists in an array.
//Sol.
let exists = ["anu","anurag","angel"];
console.log(exists.includes("anu"));
console.log(exists.includes("nu"));