console.log("Hello");

// let globalVar = "This is a global";

// function greet(){  //creating the function
//     let localVar = "This is local";
//     console.log(localVar);
// }
// greet();  //calling the function


// function greet(name){
//  return "hello " + name + "!";  
//  }

//or
let promptName = prompt("Enter your name");
let greet = function(name){  //expression
    return "<p>Welcome " + name + "!</p>";
}

 //let msg = greet("Jess");
 //console.log(msg);

//console.log(greet(promptName)); //call in one line vs two
document.write(greet(promptName));

//  alert();
//  prompt();
//  console.log();
//  document.write(); //all require parenthases

function sum(a,b){  //delclaration
     return a+b;
}
console.log(sum(2,5));


//
function multiplyThree(number){
    return number*3;
}
console.log (multiplyThree(5));



// //second function
function multiplyThree(number){
     let total=number*3;
     document.write(`
     <p>${number}x3=${total}</p>
     `);
}
multiplyThree(3)
multiplyThree(6)

//prompt("Enter your name");  //see line 17
// let greet=funcion(name){
//     return <p>"Welcome " + name+ "!"</p>";
// }