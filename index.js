
// Write your code here



let num1 = 31;
let num2 = 2;

const multiply = num1 * num2;

console.log(multiply);




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



const numSet = [3,5,7,9,13,20,17];
const max = Math.max(...numSet);

let results = Math.max(...numSet);

console.log(max);

