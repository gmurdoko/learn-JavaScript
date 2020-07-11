let motorA = {
    name: "Honda",
    bike: function () {
        console.log(this.name);
    },
};

let motorB = {
    name: "Yamaha",
    bike: motorA.bike,
};

let name = "Kawasaki";
let bike = motorA.bike;
this.name = name;
this.bike = bike;

this.bike();
motorA.bike();
motorB.bike();
