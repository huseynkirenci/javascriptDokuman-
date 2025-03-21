//* Benzin İstasyonu

const fuelPrices = {
    dizel: 24.53,
    benzin: 22.25,
    lpg: 11.1
};

let yakitTipi = prompt("Yakıt Tipi Seçiniz: ");
let litre = Number(prompt("Kaç Litre Yükleyeceksiniz: "));
let customerSalary = Number(prompt("Mevcut bakiyeniz nedir? "));


if (yakitTipi=="dizel"){
    let toplamTutar = fuelPrices["dizel"]*litre;
    if (customerSalary>=toplamTutar){
        alert("İşleminiz Başarılı");
    }else if(customerSalary<toplamTutar){
        alert("Bakiye Yetersiz.");
    }else{
        alert("Hatalı işlem tekrar deneyiniz.");
    }
}else if (yakitTipi=="benzin"){
    let toplamTutar = fuelPrices["benzin"]*litre;
    if (customerSalary>=toplamTutar){
        alert("İşleminiz Başarılı");
    }else if(customerSalary<toplamTutar){
        alert("Bakiye Yetersiz.");
    }else{
        alert("Hatalı işlem tekrar deneyiniz.");
    }
}else if (yakitTipi=="lpg") {
    let toplamTutar = fuelPrices["lpg"] * litre;
    if (customerSalary >= toplamTutar) {
        alert("İşleminiz Başarılı");
    } else if (customerSalary < toplamTutar) {
        alert("Bakiye Yetersiz.");
    } else {
        alert("Hatalı işlem tekrar deneyiniz.");
    }
}else{
    alert("Tekrar Deneyiniz.")
}

