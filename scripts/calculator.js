//console.log(calculate);

// get values from prompt
// do the four operations
// display the results in results zone


function calculate(){
    let num1=Number(prompt('Enter first number'));
    console.log(num1);

    let num2=Number(prompt('Enter second number'));
    console.log(num2);

    let add=num1+num2;
    let subtract=num1-num2;
    let multiply=num1*num2;
    let divide=num1/num2;


// function sum(){
//     return num1+num2;   
// }
console.log(add);

//function subtract(){
//     return num1-num2;
// }
console.log(subtract);

// function multiply(){
//     return num1*num2;
// }
console.log(multiply);

// function divide(){
//     return num1/num2;
// }
console.log(divide);
   

document.getElementById("results").innerHTML=`
<p>The sum of ${num1} and ${num2} is: ${add}. </p>
<p>The difference of ${num1} and ${num2} is: ${subtract}. </p>
<p>The product of ${num1} and ${num2} is: ${multiply}. </p>
<p>The quotient of ${num1} and ${num2} is: ${divide}. </p>
 `;
}
