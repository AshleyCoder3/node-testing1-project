
function trimProperties(obj) {
let newObject = Object.assign({}, obj)
  Object.keys(newObject).map(keyForObject => newObject[keyForObject] = newObject[keyForObject].trim())
  return newObject
}

function trimPropertiesMutation(obj) {
  Object.keys(obj).map(keyForObject => obj[keyForObject] = obj[keyForObject].trim())
  return obj
}

function findLargestInteger(integers) {
  let bigNum = 0
  for (let i = 0; i < integers.length; i++) {
    if(integers[i].integer > bigNum){
      bigNum = integers[i].integer
    }
  }
  return bigNum
}

class Counter {
  constructor(initialNumber) {
    this.counter = initialNumber
  }
  countDown() {
   if (this.counter <=0){
     return this.counter
   }else{
     return this.counter--
   }
  }
}

class Seasons {
  constructor() {
    this.seasons=[
       'summer',
        'fall',
        'winter',
        'spring'
    ]
    this.current = this.seasons[3]
  }
  next() {
    for (let i = 0; i < this.seasons.length ; i++) {
      if(this.current === 'spring'){
        this.current = this.seasons[0]
     return this.current
      } else if (this.seasons[i] === this.current){
        this.current = this.seasons[i + 1]
        return this.current
      }
    }
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
  }
}


function isEvenNumberAsync(number) {
  return number % 2 === 0
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
