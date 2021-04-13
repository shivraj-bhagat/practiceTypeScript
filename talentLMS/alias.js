var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// const greet = (user: {name: string, uid: stringOrNum}) => {
//     console.log(`${user.name} says hello`);
// }
var greet = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain = function (user) {
    console.log(user.name + " says hello");
};
//  Any time varible
var age = 25; // we can declare it here also but it still has type any
age = true;
console.log(age);
age = "hello";
console.log(age);
age = {
    name: "kapil"
};
console.log(age.name);
var ninja;
ninja = {
    name: "ajeet",
    age: 30
};
console.log(ninja);
ninja = {
    name: 30,
    age: "ajeet"
};
console.log(ninja);
var names = ["ajeet", "shivraj", "aurat"];
names.push("amit");
// names.push(3) this gives array as we have initialsized it with string []
// same goes from any defined array
var numbers = [1, 3, 4, 5, 6, 2];
// numbers.push("amit");
// number[0] = "aaa"
var mixed = ["kapil", 4, "ajeet", 1, 2];
mixed.push("rhino");
mixed.push(0);
// now you can push either number and string
// for object
var objNinja = {
    name: "shiv",
    belt: "black",
    age: 23
};
objNinja.age = 40;
objNinja.name = "ajeet";
// objNinja.age = "aaa" not allowed as age is declared as number
// also reassigning the same object all the member should be reassigned with same type
