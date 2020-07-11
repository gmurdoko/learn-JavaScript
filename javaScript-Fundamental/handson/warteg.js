function warteg(makanan) {
    let bayar = 0;
    for (const x in makanan) {
        switch (makanan[x]) {
            case "nasi":
                bayar += 6000;
                break;
            case "ayam goreng":
                bayar += 15000;
                break;
            case "ayam bakar":
                bayar += 18000;
                break;
            case "bebek goreng":
                bayar += 25000;
                break;
            case "bebek bakar":
                bayar += 30000;
                break;
            default:
                bayar += 0;
                break;
        }
    }
    console.log(`Total bayar orderan: ${bayar}`);
}

let order = ["nasi", "ayam goreng", "bebek goreng"];
warteg(order);
