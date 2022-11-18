let rideTime = parseInt(prompt("Please enter Ride Time"));
let rideDistance = parseInt(prompt("Please enter Ride Distance"));

console.log(fareEstimator(rideTime, rideDistance));

function getBaseFare() {
  return 11;
}

function fareEstimator(rideTime, rideDistance, carType) {
  const baseFare = getBaseFare();
  let fares = [];
  let car = [
    { type: "Sedan", costPerMinute: 1, costPerKilometer: 2 },
    { type: "SUV", costPerMinute: 2, costPerKilometer: 4 },
    { type: "Van", costPerMinute: 3, costPerKilometer: 6 },
  ];
  let tableData = "<tr><th>Type<th>Fare";
  for (var i = 0; i < car.length; i++) {
    let carAndFares = {};
    let costPerMinute = car[i].costPerMinute;
    let costPerKilometer = car[i].costPerKilometer;

    carAndFares.carType = car[i].type;
    carAndFares.fare =
      baseFare + costPerMinute * rideTime + (costPerKilometer + rideDistance);

    fares.push(carAndFares);
  }

  return JSON.stringify(fares);
}
