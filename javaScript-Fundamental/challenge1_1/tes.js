// function GanjilGenap(inputAngka) {
//     let i;

//     for (i = 1; i <= inputAngka; i++) {
//         if (i == inputAngka) {
//             if (i % 2 == 0) {
//                 console.log(`${i} adalah angka genap`);
//             } else if (i % 2 != 0) {
//                 console.log(`${i} adalah angka ganjil`);
//             }
//         }
//     }
// }

// GanjilGenap(6);

function pyramid(rows) {
    let result = "";
    let i, j, k;
    for (i = 1, k = 0; i <= rows; i++, k = 0) {
        for (j = 1; j <= rows - i; j++) {
            result += " ";
        }

        for (; k != 2 * i - 1; ) {
            result += "*";
            k++;
        }
        console.log(result);
        result = "";
    }
}

pyramid(10);
