function log(mesage) {
    console.log(mesage);
}

let message = "Hey, People!";
log(message);

// variable declaration with types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;
// we can do this color selection in one container called enum in ts

enum color{ Red = 0, Green = 1, Blue = 2}
let backgroundColor = color.Red;

// type assertion: when the variable is declared with any then the function intelligence is not show
let message2;
message2 = "abc";
let endWithC = (<string>message2).endsWith('c');
let alternativeWay = (message2 as string).endsWith('c');


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
import { Point } from './point';
let point = new Point(1,2);
point.draw();