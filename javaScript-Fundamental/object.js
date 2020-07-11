// literal and constructor
let person = new Object(); // Constructor
const person2 = {
    name: "Eza",
    age: 23,
    gender: null,
    "alamat tinggal": "Depok",
}; // literal key and value
console.log(person2);
// add property
person2.gender = "Pria";
person2.bintang = "tojoeh"; //const propertynya bisa ditambah tapi tidak bisa di assign var constnya
console.log(person2);
//delete property
delete person2.bintang;
console.log(person2);

//square bracket
console.log(person2["alamat tinggal"], person2.name);
delete person2["alamat tinggal"];

// in operator
console.log("gender" in person2);

// for ..in
for (const key in person2) {
    // console.log(key);
    console.log(person2[key]);
}
