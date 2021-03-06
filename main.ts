import {Ishape} from './Ishape'
import {Parallelogram, Square} from './Parallelogram'
import {Triangle} from './Triangle'
import {Circle} from './Circle'

let parallelogram = new Parallelogram (2,4)
let triangle = new Triangle (2,2)
let square =  new Square (4)
let circle = new Circle(3)

console.log("area parallelogram: ", parallelogram.area());
console.log("perimeter parallelogram: ", parallelogram.perimeter());

console.log("area triangle: ", triangle.area());
console.log("perimeter triangle: ", triangle.perimeter());

console.log("area square: ", square.area());
console.log("perimeter square: ", square.perimeter());

let shapeContainer : Ishape[] = []
shapeContainer.push(parallelogram)
shapeContainer.push(triangle)
shapeContainer.push(square)
shapeContainer.push(circle)

for (let i = 0; i < shapeContainer.length; i++) {
    console.log(shapeContainer[i].area());
    console.log(shapeContainer[i].perimeter());
}