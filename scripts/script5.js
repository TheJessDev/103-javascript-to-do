let myArray = ["string", 10, {}];
let cart =["speakers", "laptop", "keyboard"];

console.log(myArray[1]);
console.table(cart[2]);

let myArray2 = ["What is the meaning of life", 42, true];
console.log(myArray2[0]);


// array = [ start, stop, increment];


const numbers=[10,20,30,40,50];
console.log(numbers);


const months=["Jan", "Feb", "Mar", "Apr", "May"];
console.table(months);

//access to the values in the array
console.log(numbers(0));
console.log(numbers(1));
console.log(numbers(2));

// Array dimension 
console.log(numbers.length);
// use a for a loop for displaying the arrays of numbers and months

for(let j=0, j<numbers.length, j++){
    document.write(`<li>${numbers}</li>`);
    document.write(`<li>${months}</li>`);
}