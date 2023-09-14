function Point(x, y) {
    const getX = () => x
    const getY = () => y
    const moveTo = (_x, _y) => {
        x = _x
        y = _y;
    }
    const toString = () =>  `(${x}, ${y})`


    return {
        getX,
        getY,
        moveTo,
        toString
    }
}

// function circle 
function Circle({center, radius, x, y}) {
    center ??=Point(x,y) // if center is null or undefine, so assign it to x,y in point
    const getCenterX = () => center.getX
    const getCenterY = () => center.getY
    const getRadius = () => radius
    const moveCenterTo = (x, y) => {
        center.moveTo(x, y)
    } 
    const toString = () => `${center.toString()} - ${radius}`
    return {getCenterX, getCenterY, getRadius, moveCenterTo, toString}
}

let c1 = Circle({center: Point(4, 5), radius: 3})
let c2 = Circle({x: 6, y: 8, radius: 10})

console.log(c1.toString())
console.log(c2.toString())