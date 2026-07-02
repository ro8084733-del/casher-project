let totalDay = Number(localStorage.getItem("totalDay")) || 0;
let products = JSON.parse(localStorage.getItem("products")) || [];

document.getElementById("total").innerHTML =
"إجمالي اليوم : " + totalDay + " جنيه";

function addProduct(){

let barcode = document.getElementById("barcode").value;
let name = document.getElementById("name").value;
let price = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);

let total = price * qty;

products.push({
barcode,
name,
price,
qty,
total
});

localStorage.setItem("products", JSON.stringify(products));

totalDay += total;
localStorage.setItem("totalDay", totalDay);

showProducts();
clearInputs();

}

function showProducts(){

let table="";

products.forEach(product=>{

table += `
<tr>
<td>${product.barcode}</td>
<td>${product.name}</td>
<td>${product.price}</td>
<td>${product.qty}</td>
<td>${product.total}</td>
</tr>
`;

});

document.getElementById("tableBody").innerHTML = table;

document.getElementById("total").innerHTML =
"إجمالي اليوم : "+totalDay+" جنيه";

}

function clearInputs(){

barcode.value="";
name.value="";
price.value="";
qty.value="";

}

showProducts();