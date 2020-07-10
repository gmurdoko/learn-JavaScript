var restaurant = [250000, 710000, 125000];

var tips = [10, 15, 20];

function Pembayaran(restaurant) {
    for (const key in restaurant) {
        let tipss = 0;
        let bayar = 0;
        if (restaurant[key] > 500000) {
            tipss = restaurant[key] * (tips[0] / 100);
            bayar = tipss + restaurant[key];
            cetak(restaurant[key], bayar, tipss);
        } else if (restaurant[key] > 250000) {
            tipss = restaurant[key] * (tips[1] / 100);
            bayar = tipss + restaurant[key];
            cetak(restaurant[key], bayar, tipss);
        } else if (restaurant[key] <= 250000) {
            tipss = restaurant[key] * (tips[2] / 100);
            bayar = tipss + restaurant[key];
            cetak(restaurant[key], bayar, tipss);
        }
    }
}
function cetak(tagihan, bayar, tipss) {
    let fixTagihan = Math.ceil(tagihan);
    let fixBayar = Math.ceil(bayar);
    let fixTips = Math.ceil(tipss);
    console.log(`Tagihan : ${fixTagihan}`);
    console.log(`Tips    : ${fixTips}`);
    console.log(`------------------------------ +`);
    console.log(`Total   : ${fixBayar}`);
    console.log(``);
    console.log(``);
}
Pembayaran(restaurant);
