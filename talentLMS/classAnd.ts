// interface Point {
//     x: number,
//     y: number
// }

// let drawPoint = (point : Point) => {
//     // ... sometime we endup have multiple parameter in that seniario we can take help of objects
// }

// drawPoint({
//     x: 1,
//     y: 2
// })

class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X:' + this._x + ', Y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if(value < 0)
            throw new Error('value cannot be less than 0.');
        
        this._x = value;
    }
}

let point = new Point(1,2);
// point.x = 3; // if we change x to private it will gives error
point.draw();
// by default it's public
// point.getX(); // we want to change the value of x but how let define function with range
// point.setX(10);
// we can do achieve this by this all

// point.setX(10);
// let x = point.setX;
// we use small x as a getter and setter we have to define constructor with underscrore and variable like _x
let x = point.x;
point.x = 10;