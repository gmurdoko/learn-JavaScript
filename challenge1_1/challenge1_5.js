function BMI() {
    let nama1 = "Rifki";
    let beratBadan1 = 60;
    let tinggi1 = 1.7;

    let nama2 = "Bobby";
    let tinggi2 = 70;
    let beratBadan2 = 1.68;

    orang1 = beratBadan1 / Math.pow(tinggi1, 2);
    orang2 = beratBadan2 / Math.pow(tinggi2, 2);

    let isEven = orang1 > orang2;

    if (isEven) {
        console.log(`BMI ${nama1} Lebih Tinggi dari ${nama2}`);
    } else {
        console.log(`BMI ${nama2} Lebih Tinggi dari ${nama1}`);
    }
}

BMI();
