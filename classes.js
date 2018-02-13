class circle {
  constructor(radius, diameter) {
    this.pi = 3.14;
    this.radius = radius;
    this.diameter = diameter;
  }
  
  area () {
    return this.pi * this.radius * this.radius;
  }

  perimeter() {
    return this.pi * this.diameter;
  }
};

const 
  myCircle = new circle(3, 6),
  areaOfTheCircle = myCircle.area(),
  perimeterOfTheCircle = myCircle.perimeter()
;

console.log('area of the circle: ', areaOfTheCircle);
console.log('perimeter of the circle: ', perimeterOfTheCircle);