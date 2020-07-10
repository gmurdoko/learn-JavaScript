let user = {
    name: "Galang",
    age: 19,
    alamat: {
        kota: "depok",
        phone: {
            number: "0856565656",
            telp: "021212121",
        },
        postalCode: 16432,
    },
};

let {
    alamat: {
        phone: { number },
    },
} = user;
let {
    alamat: { phone },
} = user;
console.log(number);
log;
console.log(phone);
