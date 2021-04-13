"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello, World!";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "new title";
var isBeginner = true;
var total = 0;
var name = "Shiv Raj";
// name =  true;
var sentence = "my name is " + name;
console.log(sentence);
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var person1 = ["shiv", 23]; // tuple
// enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "heroo";
console.log(randomValue);
// let myVar: unknown = 10;
// console.log(myVar.name)
// myVar();
// (myVar as string).toUpperCase()
// type inference
var a;
a = 10;
a = true;
var b = 20;
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "shiv",
    lastName: "raj"
};
fullName(p);
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("shiv raj");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Ajeet Tripathi");
m1.greet();
console.log(m1.employeeName);
m1.delegateWork();
