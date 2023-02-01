console.log("Scripts");
var user = "Luis"; //string
var gpa = 3.2;  //number
var isActive = true;  //boolean

document.write('<p class="text"> Name: ' + user + '</p><p> Student: ' + isActive + '</p><p> GPA: ' + gpa + '</p>');


var numOfChildren = 3;
var partnerName = "Sir";
var geoLocation = "Denver";
var jobTitle = "Full Stack Developer";

document.write('<p class="text"> You will be a ' + jobTitle + ' in '+ geoLocation +', and married to '+ partnerName +' with '+ numOfChildren +' kids.</p>');  // written with "" and +


document.write(  //variables from lines 2-4
    `
     <p class="text">Name: ${user} </p>
     <p class="text">Student: ${isActive} </p>
     <p class="text">GPA: ${gpa*2} </p>
 `);  //written with ` and ${}



let userName;  // inttialization (let is same as var but local)
userName =prompt("Enter your name");  //assignation
let userEmail =prompt("Enter your email");
//let password = "**********";
//let age = 00;
//let country = "U.S.";
let salaryMonthly=prompt("Enter your monthly salary");
const m = 12;  //const doesnt change
//let yearlySalary = salaryMonthly * m;
//userName = "Jessica";



 document.write(`
<p>Name: ${userName}</p>
<p>Email: ${userEmail}</p>
<p>Salary: ${salaryMonthly*m}</p>
 `);

 