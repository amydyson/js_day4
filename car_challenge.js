
// Create a function that creates car objects which have a make, model, year, and color.
// Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.

  var speed = 0;
  var count = 0;
  function createCar(make1, model1, year1, color1) {
  // var speed = 30;
  return {
    make: make1,
    model: model1,
    year:  year1,
    color: color1,
    carInfo: function () { return "Make: " + this.make + " Model: " + this.model + " Year: "  + this.year + " Color: " + this.color },
    getSpeed: function () { return speed },
    accelerate: function () { if (speed === 80) {speed +=5;} else {speed += 10}},
    brake: function () { if (speed !=0) {speed -=
.5*Math.floor(Math.random()*speed)} count++}
  }

}
// let myCar = createCar("Audi", "R8", "2017", "Red");
myCar = createCar("Audi", "R8", "2017", "Red");

// Story 3
//
// Create a car object and use a while loop to take its speed up to 50mph.
// Then use a while loop to brake down to 0mph.
// Surprise: it doesnt stop at 0mph, fix that.


while (myCar.getSpeed() <= 80 ) {
  myCar.accelerate()
  console.log("Your speed is: " + myCar.getSpeed());
}

while (myCar.getSpeed() >= 7) {
  myCar.brake()
  console.log("Your speed is: " + myCar.getSpeed());
}

myCar.brake();
//This is for a more general case don't need it for speed of 70
if ((myCar.getSpeed() < 7) && (myCar.getSpeed() != 0)) {
  speed=0;
    console.log("Your speed is: " + speed);
}

console.log("It took " + count + " randomized brake speeds to stop.")
