// let telurA = 24;
// let telurB = 27;
// let telurC = 56;
// let telurD = 67;
// let telurE = 73;

let telurA = 144;
let telurB = 1342;
let telurC = 4675;
let telurD = 8723;
let telurE = 9394;

function grossTelur(input) {
    let gross = 144;
    let jumlahasil = Math.floor(input / gross);
    let sisa2 = input % gross;
    let lusinhasil = lusinTelur(sisa2);
    return {
        jumlahasil: jumlahasil,
        jumlahLusin: lusinhasil.jumlahLusin,
        sisa: lusinhasil.sisa,
    };
}
function lusinTelur(input) {
    let lusin = 12;
    let jumlahLusin = Math.floor(input / lusin);
    let sisa = input % lusin;
    return {
        jumlahLusin: jumlahLusin,
        sisa: sisa,
    };
}
function printGlobal(input) {
    if (input / 144 != 0) {
        printGross(input);
    } else {
        printLusin(input);
    }
}
function printGross(input) {
    let hasil = grossTelur(input);
    let hasil2 = `Anda memiliki ${hasil.jumlahasil} gross, ${hasil.jumlahLusin} lusin dan ${hasil.sisa} sisa telur.`;
    console.log(hasil2);
}
function printLusin(input) {
    let hasil = lusinTelur(input);
    let hasil2 = `Anda memiliki ${hasil.jumlahLusin} lusin dan ${hasil.sisa} sisa telur.`;
    console.log(hasil2);
}

printGlobal(telurA);
printGlobal(telurB);
printGlobal(telurC);
printGlobal(telurD);
printGlobal(telurE);

// printGross(telurA)
// printGross(telurB)
// printGross(telurC)
// printGross(telurD)
// printGross(telurE)

// printLusin(telurA)
// printLusin(telurB)
// printLusin(telurC)
// printLusin(telurD)
// printLusin(telurE)
