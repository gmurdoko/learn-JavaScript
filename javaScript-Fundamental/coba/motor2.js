var motorA = {
    name: "Honda",
    //Penggunaan arrow function merubah konsep this
    bike: () => {
        console.log(this.name);
    },
};
var motorB = {
    name: "Yamaha",
    bike: function () {
        console.log(this.name);
        motorA.bike();
    },
};
this.name = "Kawasaki";
this.bike = motorB.bike;
console.log("===  this   ===");
this.bike();
console.log("=== motor A ===");
motorA.bike();
console.log("=== motor B ===");
motorB.bike();
