"use strict";
exports.__esModule = true;
function log(mesage) {
    console.log(mesage);
}
var message = "Hey, People!";
log(message);
// variable declaration with types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;
// we can do this color selection in one container called enum in ts
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var backgroundColor = color.Red;
// type assertion: when the variable is declared with any then the function intelligence is not show
var message2;
message2 = "abc";
var endWithC = message2.endsWith('c');
var alternativeWay = message2.endsWith('c');
// we may need to use this point object type parameter in different place so a better way to do this is by
// interface
// let drawPoint = (point : {x: number, y: number}) => {
//     // ...
// }
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint = (point : Point) => {
//     // ...
// }
// drawPoint({
//     x:1,
//     y:2
// });
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
