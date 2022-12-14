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
console.log(yearUntilRetirement(1900, "Appu"));

const sumDolphins = 44 + 23 + 71
const calcAverageDolphins = sumDolphins => sumDolphins / 3;
const avgDolphins = calcAverageDolphins;
console.log(calcAverageDolphins(sumDolphins));
const sumKoalas = 65 + 54 + 49
const calcAverageKoalas = sumKoalas => sumKoalas / 3;
const avgKoalas = calcAverageKoalas;
console.log(calcAverageKoalas(sumKoalas));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));
console.log(calcAverage(65, 54, 49));
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Dolphins wins (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log("No team wins...");
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friend1 = "appu";
const friend2 = "kaavi";
const friend3 = "hish";
const friends =["appu", "kaavi", "hish"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "jay";
console.log(friends);
const firstName = "Jonas";
const jonas = [firstName, "schmedtmann", 2037-1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function(birthYear){
    return 2037 - birthYear ;
}
const years = [1990, 1992, 2012, 2000, 2017];
const age1 = calcAge(years[0]);
console.log(age1);
const age2 = calcAge(years[1]);
console.log(age2);
const age3 = calcAge(years[2]);
console.log(age3);
const age4 = calcAge(years[3]);
console.log(age4);
const age5 = calcAge(years[years.length -1]);
console.log(age5);
const ages =[calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
console.log(ages);*/

const friends = ["anu", "appu", "kripa", "neethu"];
console.log(friends);
const newLength = friends.push("Jay");
console.log(friends)
console.log(newLength);
friends.unshift("john");
console.log(friends);
friends.pop();
console.log(friends);
const popped= friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("anu"));
console.log(friends.indexOf("bob"));
console.log(friends.indexOf("kripa"));
console.log(friends.indexOf("appu"));
console.log(friends.includes("appu"));
console.log(friends.includes("bob"));
friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes((23)));
if(friends.includes("bob")){
    console.log("You have a friend called bob");
}
if(friends.includes("appu")){
    console.log("You have a friend called appu");
}
