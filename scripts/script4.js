// let yourName="Jess";
// if(confirm("Are you "+ yourName + "?")){
//     console.log("Hello " + yourName);
// }else{
//    console.log("Then what is your name?");
// }

// let number = 98;
// if(number == 99){
//     console.log("The number is correct");
// }else{
//     console.log("It is not");
// }

// // loops
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//let num1 = 10;
//let num2 = 2;

// for (start ; stop ; increment)
let products = [];  //arrays
function displayNumbers(){
    for(let i=0;i<10;i++){   
       // console.log(1);
        document.write(`<li>${i}</li>`);
     }
}



//switch
let op =prompt("Enter your option");
switch(op){
    case '1':
        displayNumbers();
        break;
        case '2':
        console.log("Option 2");
        break;
        default:
        alert("Sorry, this is not an option");
        break;
}