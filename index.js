// Code your solution in this file!

let drivers = ['Bill', 'Jenny', 'Carol', 'Jojo'];

function returnFirstTwoDrivers(drivers) {
    let first_two = drivers.slice(0,2);
    return (first_two);
}

function returnLastTwoDrivers(drivers) {
    let last_two = drivers.slice(-2);
    return (last_two);
}

let selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(multiplier) {
    return (
        (fare) => fare = fare * multiplier
    )
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driversToReturn ) {
    return driversToReturn(drivers);
}


