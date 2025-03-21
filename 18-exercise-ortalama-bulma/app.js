//* Ortalama Bulma

//todo/ Kullanıcıdan vize ve final notlarını alıyoruz
let vize = Number(prompt("Vize Notunu Giriniz: "));
let final = Number(prompt("Final Notunu Giriniz: "));

//todo/ Aritmetik ortalama hesaplanıyor
let aritmatik_ortalama = (vize + final) / 2;
console.log("Aritmetik Ortalaması: ", aritmatik_ortalama);

//todo/ GANO (Genel Ağırlıklı Not Ortalaması) hesaplanıyor
let gano = (vize * 0.3 + final * 0.7);
console.log("GANO: ", gano);

//? Neden iki farklı ortalama var:
//? Aritmetik Ortalama: Vize ve finalin eşit ağırlıkla ortalaması.
//? GANO: Vize %30, final %70 ağırlıklı gerçek başarı ortalaması.

//! Dikkat: Kullanıcı sayısal değer dışında giriş yaparsa sonuç NaN (Not a Number) olabilir.
//todo/ Hatalı giriş kontrolü örneği:
/*
if (isNaN(vize) || isNaN(final)) {
    console.log("Lütfen geçerli bir sayı giriniz!");
} else {
    console.log("Aritmetik Ortalaması: ", (vize + final) / 2);
    console.log("GANO: ", (vize * 0.3 + final * 0.7));
}
*/
