export class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X:' + this._x + ', Y: ' + this._y);
    }
}

// to make it module and use it some where we need to export it outside