//  sometimes we need this parameters many times so we make alias here to help us achive this.
type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum};

const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

// const greet = (user: {name: string, uid: stringOrNum}) => {
//     console.log(`${user.name} says hello`);
// }


const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}


//  Any time varible
let age: any = 25; // we can declare it here also but it still has type any
age = true;
console.log(age);
age = "hello";
console.log(age);
age = {
    name: "kapil",
}
console.log(age.name)


let ninja: {name: any, age: any};
ninja = {
    name : "ajeet",
    age: 30
}

console.log(ninja)

ninja = {
    name : 30,
    age: "ajeet"
}

console.log(ninja)


let names = ["ajeet", "shivraj", "aurat"];

names.push("amit");
// names.push(3) this gives array as we have initialsized it with string []
// same goes from any defined array

let numbers = [1,3,4,5,6,2];
// numbers.push("amit");
// number[0] = "aaa"

let mixed = ["kapil", 4, "ajeet", 1, 2];
mixed.push("rhino");
mixed.push(0)
// now you can push either number and string

// for object
let objNinja = {
    name: "shiv",
    belt: "black",
    age: 23
};

objNinja.age = 40;
objNinja.name = "ajeet";
// objNinja.age = "aaa" not allowed as age is declared as number
// also reassigning the same object all the member should be reassigned with same type