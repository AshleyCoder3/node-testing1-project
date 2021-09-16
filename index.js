
function trimProperties(obj) {
let newObject = Object.assign({}, obj)
  Object.keys(newObject).map(
      keyForObject =>
          newObject[keyForObject] = newObject[keyForObject].trim())
  return newObject
}

function trimPropertiesMutation(obj) {
  Object.keys(obj).map(
      keyForObject =>
          obj[keyForObject] = obj[keyForObject].trim())
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
  constructor(name, tankSize, mpg) {
    this.odometer = 0
    this.tank = tankSize
    this.milPerGal = mpg
  this.fuel = tankSize
  }

  drive(distance) {
    const gas = this.fuel * this.milPerGal;
    if (distance >= gas) {
      this.fuel = 0;
      this.odometer += gas;
      return this.odometer;
    } else {
      const usedGas = distance / this.milPerGal;
      this.fuel -= usedGas;
      this.odometer += distance;
      return this.odometer;
    }
  }

  refuel(gallons) {
    if (gallons >= this.tank) {
      this.fuel = this.tank;
      const range = this.fuel * this.milPerGal;
      return range;
    } else {
      this.fuel += gallons;
      const range = this.fuel * this.milPerGal;
      return range;
    }
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
