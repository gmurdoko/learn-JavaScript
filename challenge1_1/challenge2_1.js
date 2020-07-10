function GanjilGenap(input) {
    let i;
    for (i = 0; i < input; i++) {
        if (input % 2) {
            console.log("Ganjil");
            break;
        } else {
            console.log("Genap");
            break;
        }
    }
}

GanjilGenap(6);
GanjilGenap(3);
