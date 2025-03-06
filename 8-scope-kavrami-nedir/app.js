// ?Document write ile cıktı verme
/*
document.write("Hello World <br>");
document.writeln("asdasdasd <br>");
document.writeln(3.5);
*/

// ?Console log metodunu kullanırız.
/*
console.log('Hello World');

console.log(3.52);
console.log(true);
console.log({name:"Enes",surname:"Bayram"});
*/

// ?Console daki yazıyı sıfırlama
// console.clear();

// ?Değişken ekleme ve yazdırma
/*
let a = 5;
let b = 10;

console.log("İki Sayının Toplamı: ",a+b);
*/

// ?Alert Popup ile cikti verme islemi
// todo console.log(window);
/*
let a = 52;
let b = 10;
alert("İki sayinin Toplami: "+ (a+b));
*/

//? Gelistirme Araci Debugger kullanımı
/*
debugger;
console.log(location.port);
console.log(location.port);

console.log(location.port);
console.log(location.port);

console.log(location.port);
console.log(location.port);

console.log(location.port);
console.log(location.port);
*/

//? Scope Kavrami
//! Var - Let - Const

//! -------------SCOPE (KAPSAM)-------------
   // *-> Global Scope
   // *-> Function Scope
   // *-> Block Scope
//todo Genel
/*
var degisken = 10;
console.log(degisken);
var a = 5;

if(true){
    console.log(a);
}

function method1(){
    console.log("methot",a);
}

method1();
*/
//todo Gelisme
/*
var sayi=12 // Global scope
function method2(){
    var b = 13; // Function Scope
    console.log("method",b);
    console.log("global sayi",sayi);

}
method2();
*/
//todo Sonuc
/*
var sayi=12 // Global scope
function method3(){
    var b = 13; // Function Scope
    if (true){
        var c = 16; // Blok scope
        console.log(c);
        console.log("method",b);
        console.log("global sayi",sayi);
    }
}
method3();
*/

