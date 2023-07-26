// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuadrupler = createFareMultiplier(4);
const fareQuintupler = createFareMultiplier(5);
const fare = Math.floor(Math.random() * 100) + 1;
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}
console.log(fareQuadrupler(2));
console.log(fareDoubler(10));
console.log(fareTripler(12));
console.log(fareQuintupler(5));

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))
