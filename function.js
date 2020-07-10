//js function secara default mereturn nilai yang berupa undefined
// function declaration
// function getUserName() {
//     return "Kang Prana";
// }

// //function expression
// let getUserName = function () {
//     return "Kang Prana";
// };
// console.log(getUserName());
// //arrow function
// let getUserName = (name) => {
//     return name;
// };
//OR
// let getUserName = (name, lsname) => name + lsname; // return name
// console.log(getUserName("hahaha", "hehehe"));

// let getUsr = (name, age) => {
//     return { name, age };
// };
// let user = getUsr("Galang", 19);
// console.log(user);

let getUsername = (name, age) => ({ name, age });
let user = getUsername("Galang", 19);
console.log(user.name, user.age);

//default value
// let getUserName = (name = "Galang") => name;
// let getUserName = (name) => {
//     return name === undefined ? "Galang" : name;
// };

// let getUserName = (name) => {
//     let newName = name === undefined ? "Galang" : name;
//     return newName;
// };
