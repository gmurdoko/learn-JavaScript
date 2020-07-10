function Livecode(hari, bulan, tahun) {
    var namaBulan;
    let isValid = inputCheck(hari, bulan, tahun);
    if (isValid) {
        switch (bulan) {
            case 1:
                namaBulan = "Januari";
                Hari31(hari, namaBulan, tahun);
                break;
            case 2:
                namaBulan = "Februari";
                HariFebruari(hari, namaBulan, tahun);
                break;
            case 3:
                namaBulan = "Maret";
                Hari31(hari, namaBulan, tahun);
                break;
            case 4:
                namaBulan = "April";
                Hari30(hari, namaBulan, tahun);
                break;
            case 5:
                namaBulan = "Mei";
                Hari31(hari, namaBulan, tahun);
                break;
            case 6:
                namaBulan = "Juni";
                Hari30(hari, namaBulan, tahun);
                break;
            case 7:
                namaBulan = "Juli";
                Hari31(hari, namaBulan, tahun);
                break;
            case 8:
                namaBulan = "Agustus";
                Hari31(hari, namaBulan, tahun);
                break;
            case 9:
                namaBulan = "September";
                Hari30(hari, namaBulan, tahun);
                break;
            case 10:
                namaBulan = "Oktober";
                Hari31(hari, namaBulan, tahun);
                break;
            case 11:
                namaBulan = "November";
                Hari30(hari, namaBulan, tahun);
                break;
            case 12:
                namaBulan = "Desember";
                Hari31(hari, namaBulan, tahun);
                break;
            default:
                console.log("Bulan hanya sampai 12");
                break;
        }
    } else {
        console.log("Tahun, Bulan atau Hari Tidak Valid");
    }
}

function Kabisat(tanggal) {
    if (tanggal % 4) {
        return false;
    } else {
        return true;
    }
}

function Hari31(tanggal, namaBulan, tahun) {
    if (tanggal > 0 && tanggal < 32) {
        console.log(`${tanggal} ${namaBulan} ${tahun}`);
    } else {
        console.log(`${namaBulan} hanya ada sampai tanggal 31`);
    }
}
function Hari30(tanggal, namaBulan, tahun) {
    if (tanggal > 0 && tanggal < 31) {
        console.log(`${tanggal} ${namaBulan} ${tahun}`);
    } else {
        console.log(`${namaBulan} hanya ada sampai tanggal 30`);
    }
}
function HariFebruari(tanggal, namaBulan, tahun) {
    isKabisat = Kabisat(tahun);
    if (isKabisat) {
        if (tanggal > 0 && tanggal < 30) {
            console.log(`${tanggal} ${namaBulan} ${tahun}`);
        } else {
            console.log(
                `${namaBulan} tahun ${tahun} hanya ada sampai tanggal 29`
            );
        }
    } else if (tanggal > 0 && tanggal < 30) {
        if (tanggal == 29) {
            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
        } else {
            console.log(`${tanggal} ${namaBulan} ${tahun}`);
        }
    } else {
        console.log(`${namaBulan} tahun ${tahun} hanya ada sampai tanggal 28`);
    }
}

function inputCheck(hari, bulan, tahun) {
    if (tahun > 0 && bulan > 0 && hari > 0) {
        return true;
    } else {
        return false;
    }
}

Livecode(29, 2, 2021);
Livecode(30, 2, 2021);
Livecode(30, 2, 2020);
Livecode(31, 4, 2020);
Livecode(21, 7, 2020);
