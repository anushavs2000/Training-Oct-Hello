/*"use strict";
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can Drive");
// const interface = "audio";
// const private = 5766;
// const if = 23;

function logger(){
    console.log("My name is Anusha");
}
logger();
logger();
logger();
logger();
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(5, 0);
const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);
console.log(fruitProcessor (5, 0));
const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);
const num = Number("23");// check in console by just typing num

// function declaration

function calcAge1(birthYear){
    return 2037 -birthYear
}
const age1 = calcAge1(2011);
console.log(age1);

// function expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear
}
const age2 = calcAge2(2000)
console.log(age1, age2)

// Arrow function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000)
console.log(age3)

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(2000, "Anusha"))
console.log(yearsUntilRetirement(2004, "Anigha"))

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor (2, 3));

const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const yearUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    }else{
        console.log(`${firstName} has already retired`)
        return 0;
    }
}
console.log(yearUntilRetirement(2000, "Anu"));
console.log(yearUntilRetirement(1900, "Appu"));*/

const sumDolphins = 44 + 23 + 71
const calcAverageDolphins = sumDolphins => sumDolphins / 3;
const avgDolphins = calcAverageDolphins;
console.log(calcAverageDolphins(sumDolphins));
const sumKoalas = 65 + 54 + 49
const calcAverageKoalas = sumKoalas => sumKoalas / 3;
const avgKoalas = calcAverageKoalas;
console.log(calcAverageKoalas(sumKoalas));

console.log(avgDolphins)