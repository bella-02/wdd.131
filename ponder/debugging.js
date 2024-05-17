const PI = 3.14;
let radius = 3;

function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}

area = circleArea(3);
console.log("area1", area);

area = circleArea(4);
console.log("area2:",area);
