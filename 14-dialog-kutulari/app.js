//* DİYALOG KUTULARİ

/*
    - Alert
    - Prompt
    - Confirm
*/

// console.log(window);

//? alert() -> Uyarı vermenizi sağlar.
// alert("İşleminize devam etmeden önce lütfen kaydediniz.");

//? Prompt() -> Kullanıcıdan değer alabilirsiniz.
/*
let isim =prompt("İsminizi Giriniz.");
let yas =prompt("Yaşınızı Giriniz.");
console.log(isim,yas);
*/
//todo Kullanıcıdan alınan her veri string'tir. Yaşta string ifade alır. Bu kodda

//? confirm() -> Kullanıcıdan onay almak için kullanılır. Örneğin silmek istediğinze emin misiniz
let sonuc= confirm("Silmek istediğinize emin misiniz?")
console.log(sonuc);