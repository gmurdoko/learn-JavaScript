let user5 = {
    name: "john",
    sayHello() {
        console.log(this.name);
    },
};

let admin = user5;
user5 = null;
console.log(admin === user5);

admin.sayHello();
