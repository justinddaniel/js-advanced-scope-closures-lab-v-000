function produceDrivingRange (blockRange) {
  return function (origin, destination) {
    let range = Math.abs(parseInt(destination) - parseInt(origin))
    if (range > blockRange) {return `${range - blockRange} blocks out of range`}
    else {return `within range by ${blockRange - range}`}
  }
}