var restaurant = [250000, 710000, 125000];

var tips = [10, 15, 20];
let kumpulan = [];
function Pembayaran(restaurant) {
    for (const key in restaurant) {
        let tipss = 0;
        let bayar = 0;
        if (restaurant[key] > 500000) {
            tipss = restaurant[key] * (tips[0] / 100);
            bayar = tipss + restaurant[key];
            assignKumpulan(restaurant[key], bayar, tipss);
        } else if (restaurant[key] > 250000) {
            tipss = restaurant[key] * (tips[1] / 100);
            bayar = tipss + restaurant[key];
            assignKumpulan(restaurant[key], bayar, tipss);
        } else if (restaurant[key] <= 250000) {
            tipss = restaurant[key] * (tips[2] / 100);
            bayar = tipss + restaurant[key];
            assignKumpulan(restaurant[key], bayar, tipss);
        }
    }
    printKumpulan(kumpulan);
}
function assignKumpulan(tagihan, bayar, tipss) {
    let fixTagihan = Math.ceil(tagihan);
    let fixBayar = Math.ceil(bayar);
    let fixTips = Math.ceil(tipss);
    let temp = {
        Tagihan: fixTagihan,
        Tips: fixTips,
        Total: fixBayar,
    };
    kumpulan.push(temp);
}
function printKumpulan(kumpulan) {
    for (const key in kumpulan) {
        let hasil = kumpulan[key];
        console.log(`Tagihan        : ${hasil.Tagihan}`);
        console.log(`Tips           : ${hasil.Tips}`);
        console.log(`------------------------------ +`);
        console.log(`Total Tagihan  : ${hasil.Total}`);
        console.log(``);
        console.log(``);
    }
}
Pembayaran(restaurant);
