function produceDrivingRange (blockRange) {
  return function (origin, destination) {
    let range = Math.abs(parseInt(destination) - parseInt(origin))
    if (range > blockRange) {return `${range - blockRange} blocks out of range`}
    else {return `within range by ${blockRange - range}`}
  }
}

function produceTipCalculator (percentage) {
  return function (fare) {return fare * percentage}
}

function createDriver () {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}
