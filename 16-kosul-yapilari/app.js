//* Koşul Yapıları


//? Alıştırma

let yas = Number(prompt("Yaşınız :"));
console.log(typeof yas);
let para = Number(prompt("Bütçeniz :"));

if (yas>=18 && para>=3000 ) {
    alert("Sipariş edebilir.");
}else{
    alert("Sipariş edemez.");
}