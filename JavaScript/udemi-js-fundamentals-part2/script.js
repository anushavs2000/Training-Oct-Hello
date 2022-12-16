"use strict";
/*let hasDriversLicense = false;
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
console.log(ages);

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

const calcTip = function (bill) {
    return bill >= 30 && bill <= 500 ? bill * .15 : bill * .2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

//array
const anuArray = [
    "Anu",
    "Wayanad",
    2022 - 2000,
    "student",
    ["nivi", "kaavi", "appu"]
];

//object
const anu = {
    firstName: "Anu",
    place: "Wayanad",
    age: 2022 - 2000,
    job: "Web devoloper",
    friends: ["nivi", "Kaavi", "Appu"]
};
console.log(anu);
console.log(anu.firstName);
console.log(anu.age);
console.log(anu.job);
console.log(anu.friends);
console.log(anu["firstName"]);
console.log(anu["place"]);
console.log(anu["age"]);
console.log(anu["job"]);
console.log(anu["friends"]);
const nameKey = "Name";
console.log(anu["first" + nameKey]);
const interestedIn = prompt("What do you want to know about anu? Choose betweeen firstName, place, age, job and friends");
// console.log(interestedIn);
// console.log(anu[interestedIn]);
if(anu[interestedIn]){
    console.log(anu[interestedIn])
}else{
    console.log("Wrong request! Choose betweeen firstName, place, age, job and friends")
}
anu.location = "Kerala";
anu["Insta"] = "@anushavs";
console.log(anu);
console.log(`${anu.firstName} has ${anu.friends.length} friends, and her best friend is ${anu.friends[0]}`);

const anu = {
    firstName: "Anu",
    place: "Wayand",
    birthYear : 2000,
    job: "Web developer",
    friends: ["Nivi", "Kaavi", "Appu"],
    hasDriverLicense: true,

    // calcAge: function(birthYear){ //method
    //     return 2022 - birthYear;
    // }

    // calcAge: function(){
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function (){
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.age}-year old ${this.job} and she has ${this.hasDriverLicense ? "a" : "no"} driver's license.`
    }
};
console.log(anu.calcAge());
console.log(anu.age);
// console.log(`${anu.firstName} is a ${anu.age}-year old ${anu.job} and she has ${this.hasDriverLicense ? "a" : "no"} driver's license.`);
console.log(anu.getSummary());
// console.log(anu.calcAge());
// console.log(anu.calcAge());
// console.log(anu.calcAge());
// console.log(anu.calcAge());
// console.log(anu.calcAge(2000));
// console.log(anu["calcAge"](2000));

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2
    }
}
mark.calcBMI();
console.log(mark.BMI);
john.calcBMI();
console.log(john.BMI);
console.log(mark.BMI, john.BMI)

if(mark.BMI > john.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI}). `)
}else if(john.BMI > mark.BMI){
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}).`)
}else{
    console.log(`They both have same BMI`)
}

console.log(`"lifting weights repetition 1"`);
console.log(`"lifting weights repetition 2"`);
console.log(`"lifting weights repetition 3"`);
console.log(`"lifting weights repetition 4"`);
console.log(`"lifting weights repetition 5"`);
console.log(`"lifting weights repetition 6"`);
console.log(`"lifting weights repetition 7"`);
console.log(`"lifting weights repetition 8"`);
console.log(`"lifting weights repetition 9"`);
console.log(`"lifting weights repetition 10"`);

for (let rep = 1; rep <= 10; rep++){
    // console.log("lifting weights repetition 1");
    console.log(`lifting weights repetition ${rep}!`)
}

const anu = [
    "Anusha VS",
    "Wayanad",
    2022 - 2000,
    "Student",
    ["nivi", "Appu", "Kaavi"],
    true
];
const types = [];

for(i = 0; i < anu.length; i++){
    console.log(anu[i], typeof anu[i])

    types[i] = typeof anu[i]
}
console.log(types)

const years = [1990, 1991, 1992, 2000, 2003, 2005, 2017];
const ages = [];
for (let i = 0; i < years.length; i++){
    ages.push(2022 - years[i])
}
console.log(ages)

console.log("---ONLY STRINGS---")
for (let i = 0; i < anu.length; i++){
    if(typeof anu[i] !== "string") continue;
    console.log(anu[i], typeof anu[i])
}

console.log("---BREAK WITH NUMBERS---")
for (let i = 0; i < anu.length; i++){
    if (typeof anu[i] === "number") break;
    console.log(anu[i], typeof anu[i])
}
for (let i = anu.length - 1; i>=0; i--){
    console.log(anu[i])
} 

for (exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}

for (let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weight repetition ${rep}`)
}

let rep = 1;
while(rep <= 10){
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6)+ 1;
// console.log(dice);

while (dice !==6) {
    console.log(`You are rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6)+ 1
    if(dice === 6)console.log(`Loop is about to end...`)
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals)
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    // console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}
// calcTempAplitude([3, 7, 4, 1, 8]);
// calcTempAplitude(temperatures);
const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

const calcTempAplitudeNew = function (t1, t2) {
    const array1 = ["a", "b", "c"];
    const array2 = ["d", "e", "f"];
    const array3 = array1.concat(array2);
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}
const amplitudeNew = calcTempAplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celcius",
        value: Number(prompt('Degree celsius:')),
    }; 11
    console.log(measurement);
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());*/

// const calcTempAmplitudeBug = function(t1, t2){
//     const temps = t1.concat(t2);
//     console.log(temps);
//      let max = 0;
//      let min = 0;

//      for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== "number") continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`...${data1[0]}°C...${data1[1]}°C...${data1[2]}°C...`);
const printForecast = function(arr){
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}°C in ${i + 1} days... `;
    }
    console.log("..." + str);
}
printForecast(data1)