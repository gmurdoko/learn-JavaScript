// let user1 = {
//     name: "Apin",
// };

// //object and array
// //stored and copied by reference
// let user2 = user1;
// let user3 = {
//     name: "APIN",
//     // {
//     //     firstName: "hehe",
//     //     lastName: "hphp",
//     // },
// };
// //comparasion by reference
// console.log(user2 === user1); // true karena alamatnya sama
// console.log(user3 === user1); // false karena isi sama tapi alamat beda
// //clone object with assign
// let user4 = {
//     name: "John",
// };
let action1 = { canWalk: true };
let action2 = { canSpeak: true };

// Object.assign(user4, action1, action2);
// action1.canWalk = false;
// console.log(user4);

// let user5 = Object.assign({}, user4);
// console.log(user5);
// console.log(user5 === user4);

let name1 = {
    name: {
        firstName: "John",
        lastName: "Wick",
    },
};

Object.assign(name1, action1, action2);
let name2 = Object.assign({}, name1);
// name1.name.firstName = "Jajang";
console.log(name1);
console.log(name2);
console.log(name1 === name2);
let name3 = { ...name1 };
// name3.canSpeak = false;
// name3.name.firstName = "Galang";
console.log(name3);

let name4 = { ...name1, name: { ...name1.name } };
name4.name.firstName = "Cahyo";
console.log(name4);

let name5 = {
    ...name1,
    name: { ...name1.name },
    sayHello() {
        console.log(`Hello ${this.name.firstName} ${this.name.lastName}`);
    },
};

let admin = name1;
name1 = null;
name5.sayHello();
