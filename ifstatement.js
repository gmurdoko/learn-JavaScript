
let angka = 10;
if (angka == 0) {
    console.log(`${angka} adalah bilangan netral`);
} else if (angka % 2 == 0) {
    console.log(`${angka} adalah bilangan genap`);
} else {
    console.log(`${angka} adalah bilangan ganjil`);
}

//ternary

//condition ? statement1 : statement2;
// bilangan = 10;
// let apakahGenap = (bilangan % 2 == 0) ? true : false;
// console.log(apakahGenap)

bilangan = 0;
let apakahGenap = (bilangan % 2 == 0) ? "Bilangan Genap" : (bilangan == 0) ? "Bilangan Netral" : "Bilangan Ganjil";
console.log(apakahGenap);

let isEven = (bilangan % 2 == 0);
console.log(isEven);
