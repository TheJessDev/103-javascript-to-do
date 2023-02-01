function addStudent(){
    let userName= prompt("Enter student name");
    let fsdi101=Number(prompt("Enter the fsdi 101 grade"));  // Number converts string to a real number to calculate
    let fsdi102=Number(prompt("Enter the fsdi 102 grade"));
    let gpa = (fsdi101+fsdi102)/2; //calculation


    document.getElementById("text").innerHTML+=`  
    <h5>Welcome ${userName}</h5>
    <p>Name: ${userName}</p>
    <p>GPA: ${gpa}</p>
`;
}
//addStudent(); call action assigned to <button onclick="..."></button>

// += will Add to the list vs override 



