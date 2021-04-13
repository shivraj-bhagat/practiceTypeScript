export {}
let message = "Hello, World!";
console.log(message);

let x=10;
const y=20;

let sum;
const title = "new title";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Shiv Raj";
// name =  true;
let sentence = `my name is ${name}`;
console.log(sentence);

let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4];

let person1: [string, number] = ["shiv", 23]; // tuple

// enum
enum color {Red,Green,Blue};

let c: color = color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "heroo";

console.log(randomValue);

// let myVar: unknown = 10;
// console.log(myVar.name)
// myVar();
// (myVar as string).toUpperCase()

// type inference
let a;
a = 10;
a = true;

let b = 20;
// b = true;

interface Person {
    firstName: string,
    lastName: string 
}

function fullName( person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: "shiv",
    lastName: "raj"
}

fullName(p);

// classes
class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee("shiv raj");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks ${this.employeeName}`);
    }
}

let m1 = new Manager("Ajeet Tripathi");
m1.greet();
console.log(m1.employeeName);
m1.delegateWork();