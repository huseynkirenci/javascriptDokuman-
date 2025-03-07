//* Var -Let -Const

//todo/ var: ram bellekte cok fazla yer kaplar. Cunku degiskeni function scrope ozelligini verir.
//todo/ let/const: block scope ozelligine sahiptir. Daha az yer kaplar.

//? Var Kullanimi
/*
function selamVer(){
    if (true){
        var selam = "Herkese Selam"; //function Scope
    }
    console.log(selam); //!* Calısır hata vermez.
}
selamVer();
*/

//? Hatali Let Kullanımı aşagıdaki fonks!
/*
function hiWorld(){
    if (true){
        let selam = "Hi World"; //block Scope
    }
    console.log(selam); //! Hatali!!
    //!* Cunku block scope da oldu parantez icinde kullanılma saglanır.
}
hiWorld();
*/

//? Doğru let/const Kullanimi
/*
function hiWorld(){
    if (true){
        const selam = "Hi World"; //block Scope
        // Bu kisimda let yerine const ta kullanilabilir.
        console.log(selam);

    }
}
hiWorld();
*/


//todo/ var ile tanımlanan degisken ikinci kez tekrar tanımlanabilir.
/*
var a = 5;
var a = 10;
a=3;
console.log(a);
*/

//! let ile tanımlanan degisken ikinci kez tanimlanırsa hata verir.
/*
let b = 12; // bir kere kullanılmalıdır.
let b =15; // HATA!!!
console.log(b);
*/

//? Let&Const Farki
//todo/ const: sabit, degismez. Anlamina gelir. Örneğin:
/*
const c = 20;
console.log(c); // Calısır
*/

//todo/ şöyle olursa calısmaz. Ama let olursa degisken calisir.
/*
const a = 10;
a = 13; // HATA!!! Bu normalde let'te ve var da calısır.
console.log(a); // HATA
*/
/*
let a = 10;
a = 13; // let'te ve var da calısır.
console.log(a);
*/








