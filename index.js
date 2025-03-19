
// Write your code here

// Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.


let num1 = 31;
let num2 = 2;

const multiply = num1 * num2;

console.log(multiply);


// Create a variable called random that will generate a random integer greater than 0.

const random = Math.floor(Math.random() * 100) + 1;

console.log(random);


// Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.

let num3 = 10;
let num4 = 6;


let mod = num3 % num4; 
console.log(mod);

//or 
function mod(num3, num4) {
    return num3 % num4;
}
console.log(mod(num3, num4));


// Create a variable called max that finds the highest number in a set; the value returned should be 20.


// const numSet = [5,8,12,20,7];
// const max = Math.max(...new numSet([5,8,12,20,7]));

// const numSet = [5, 12, 20, 8, 15];
// const max = Math.max(...new numSet([5, 12, 20, 8, 15]));

// console.log(max);

// const max = Math.max(5, 12, 20, 8, 15);

