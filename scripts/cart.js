// global vars
let cart=[];
let prodId=0;
function addProduct(){
    let product = document.getElementById("txtProduct").value; //get the value
    cart.push(product); //display the value into the HTML
    displayCart(product); //display the value
    document.getElementById("txtProduct").value = ""; //clearing the input
    updateNumberProducts();
}

function displayCart(newProduct){
    let item= `<li id="${prodId}"> ${newProduct} <span onclick="deleteProd(${prodId})">🗑️</span></li>`; //creating the html tmp
    const ul= document.getElementById("productsList"); //getting the html element
    ul.innerHTML+=item; //adding items to html
}

function updateNumberProducts(){
    document.getElementById("amountProducts").innerHTML=cart.length;
}

function deleteProd(id){
    document.getElementById(id).remove();
    cart.pop();
    updateNumberProducts();
}

function init(){
    console.log("Init");
    updateNumberProducts();
}

window.onload=init;//wait to render the html