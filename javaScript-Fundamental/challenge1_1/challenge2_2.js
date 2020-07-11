function Pyramid() {
    let rows = 10;
    for (let i = 0; i < rows; i++) {
        cetak = " ";
        for (let j = 0; j < i; j++) {
            cetak += "*";
        }
        console.log(cetak);
    }
}
Pyramid();
