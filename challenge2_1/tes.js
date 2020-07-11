let restaurant = [250000, 710000, 125000];
let tips = [10, 15, 20];

let Pembayaran = (restaurant) => {
    let i = 0,
        len = restaurant.length,
        tipsAmount,
        subTotal,
        total,
        arr = [];
    for (; i < len; ) {
        if (restaurant[i] > 500000) {
            tipsAmount = restaurant[i] * (tips[0] / 100);
            subTotal = restaurant[i] + tipsAmount;
        } else if (restaurant[i] >= 250000 && restaurant[i] <= 500000) {
            tipsAmount = restaurant[i] * (tips[1] / 100);
            subTotal = restaurant[i] + tipsAmount;
        } else {
            tipsAmount = restaurant[i] * (tips[2] / 100);
            subTotal = restaurant[i] + tipsAmount;
        }
        total = subTotal + tipsAmount;
        arr.push({
            Tagihan: total,
            Tips: tipsAmount,
            Total: total,
        });
        i++;
    }
    console.log(arr);
};

Pembayaran(restaurant);
