function FizzBuzz() {
    let angka = 20;
    for (let i = 1; i <= angka; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
            printYak(`FizzBuzz`);
        } else if (i % 2 == 0) {
            printYak(`Buzz`);
        } else if (i % 5 == 0) {
            printYak(`Fizz`);
        } else {
            printYak(i);
        }
    }
}
function printYak(input) {
    console.log(input);
}

FizzBuzz();
