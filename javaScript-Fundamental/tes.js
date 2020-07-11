// 24
// Extra Pedas
// function hitungTelurGross(grossBuah,lusinBuah, jumlahBuah) {
//     let gross, lusin, sisaTelur, hasil;
//     gross = parseInt(jumlahBuah / grossBuah);
//     lusin = parseInt((jumlahBuah % grossBuah) / lusinBuah);
//     sisaTelur = (jumlahBuah % 144 % 12)
//     hasil = `Anda memiliki ${gross} gross, ${lusin} lusin, ${sisaTelur} sisa telur`
//     console.log(hasil)
// }
// // Print result
// function printHitungTelurGross() {
//     hitungTelurGross(144,12,1342)
// }
// printHitungTelurGross()
// function getName(namaDepan, namaBelakang) {
//     return namaDepan + namaBelakang
// }

// console.log(getName("Jution", "Candra"))
// function FizzBuzz(numberInput) {
//     let i;
//     for (i = 1; i<=numberInput; i++) {
//         if(i % 5 == 0 && i % 2 == 0) {
//             console.log("FIZZBUZZ")
//         } else if (i % 5 == 0 && i % 2 != 0) {
//             console.log("FIZZ")
//         } else if (i % 2 == 0 && i % 5 != 0) {
//             console.log("BUZZ")
//         } else {
//             console.log(i)
//         }
//     }
// }

// FizzBuzz(20)

// function FizzBuzz() {
//     FizzBuzzProccess(20)
// }

// function FizzBuzzProccess(numberInput) {
//     let i;
//     for (i = 1; i<=numberInput; i++) {
//         if(i % 5 == 0 && i % 2 == 0) {
//             PrintResult("FIZZBUZZ")
//         } else if (i % 5 == 0 && i % 2 != 0) {
//             PrintResult("FIZZ")
//         } else if (i % 2 == 0 && i % 5 != 0) {
//             PrintResult("BUZZ")
//         } else {
//             PrintResult(i)
//         }
//     }
// }

// function PrintResult(result) {
//     console.log(result)
// }
// // print result
// FizzBuzz()

var numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
    return total - num;
}
