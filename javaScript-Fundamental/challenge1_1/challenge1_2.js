function Waktu(input) {
    if (input >= 4 && input <= 5) {
        console.log("WAKTU BANGUN");
    } else if ((input >= 8 && input <= 11) || (input >= 13 && input <= 17)) {
        console.log("WAKTU BELAJAR");
    } else if (input == 12) {
        console.log("JAM ISTIRAHAT");
    } else if (input > 24) {
        console.log("Hanya Ada 24 jam dalam sehari");
    } else {
        console.log("WAKTU MAIN");
    }
}
Waktu(9);
Waktu(12);
Waktu(4);
Waktu(25);
Waktu(20);
