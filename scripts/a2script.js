function buyNow(){

// item 1 shoes
let shoes=Number(prompt("How many pairs of Shoes would you like to purchase?"));
console.log(shoes);
let shoePrice=45;
let item1Total=Number(shoes*shoePrice);
console.log(item1Total);
// item 2 jacket
let jacket=Number(prompt("How many Jackets would you like to purchase?"));
console.log(jacket);
let jacketPrice=60;
let item2Total=Number(jacket*jacketPrice);
console.log(item2Total);
// subtotal
let subTotal=Number(item1Total+item2Total);
console.log(subTotal);
const taxes=Number(subTotal)*.085;
console.log(taxes);
// total
let total=Number(subTotal+taxes);
console.log(total);

// display
document.getElementById("text").innerHTML=
`<h2>Your purchase reciept</h2>
<p>Item1: Shoes...${shoes} at $${shoePrice}.</p>
<p>total: $${item1Total}</p>
<p>Item2: Jacket...${jacket} at $${jacketPrice}.</p>
<p>total: $${item2Total}</p>
<p>Sub Total: $${subTotal}</p>
<p>taxes: $${taxes}</p>
<h3>TOTAL: $${total}</h3>
<h3>Thank you for shopping!</h3>
`;
}