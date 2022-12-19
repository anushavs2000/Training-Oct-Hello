// let myAge = 22
// let humanDogRatio = 7
// let count = myAge * humanDogRatio
// let myDogAge = count
// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// let count = 0
// function save(){
//     console.log("The button was clicked")
// }

// function startRace(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
//     console.log(0)
// }
// startRace()

// let a = 39
// let b = 43
// let c = 28
// function logsOutSum(){
//     let sum = a + b + c
//     console.log(sum)
// }
// logsOutSum()

// let a = 0
// function laps(){
//     a = a + 1
//     console.log(a)
// }
// laps()
// laps()
// laps()
// laps()

// var a;
// var b = 2;
// console.log(b) 
// a = 7;
// b = a;
// console.log(a)

// var a = 5;
// var b = 38;
// var c = "It is a ";
// a = a +1 ;
// b = b + 3 ;
// c = c + "string";
// console.log(a)
// console.log(b)
// console.log(c)

// var a;
// a = 5 % 2;
// console.log(a)

// var a = "\"first\"\n\t second \n third"
// console.log(a)

/////// 08/12/12 //////

// var firstNameLength = 0
// var firstName = "Herald"
// firstNameLength = firstName.length
// firstLetter = firstName[0]
// lastLetter = firstName[firstName.length - 1]
// console.log(firstNameLength)
// console.log(firstLetter)
// console.log(lastLetter)

// var a = "Aello";
// a = "Hello";
// console.log(a)

// function functionWithArgs(a, b){
//     console.log(a - b)
// }
// functionWithArgs (10 , 5)
// function functionArgsAddition(a, b){
//     console.log ( a + b)
// }
// functionArgsAddition( 100, 30)

// function date(){
//     document.getElementById('display').innerHTML = Date()
// }

// function clickclick(){
//     document.getElementById('click_me').innerHTML = "Booooooom!"
// }

// function first(){
//     document.getElementById("myImage").src="assets/cat2.jpg"
//     // document.getElementById("text").style.color="red"
//     document.getElementById("text").style.display="none"
// }
// function second(){
//     document.getElementById("myImage").src="assets/img-2.jpg"
//     document.getElementById("text").style.color="green"
// }

// document.getElementById("sum").innerHTML= 7 + 9
// document.write(5 + 9)
// window.alert("Save Password")

// let name = "Anusha";
// let age = 22;
// let isApproved = false;
// let firstName = undefined;
// let selectedColor = null;

// let person = {
//     name : "anu",
//     age : 22
// }
// person.name = "niv";
// console.log(person.name)

// let selectedColors = ["red", "white"];
// selectedColors[2] = 1001;
// console.log(selectedColors)

// function square (number) {
//     return number * number
// }
// // let  number = square(2)
// console.log(square(5))
// // console.log(number)

// var myArray = [["cat", "hello"], [749 , "black"]]
// console.log(myArray)
// myArray.push(["white", "Kattan"])
// console.log(myArray)

// function check(val){
//     if (val > 20){
//         return "greater than 20"
//     }
//     if (val > 30){
//         return "greater than 30"
//     }
//     return "30 or over"
// }
// console.log(check(25))

// function testSize(num){
//     if (num < 5){
//         return "tiny"
//     }
//     else if(num < 10){
//         return "small"
//     }
//     else if(num < 15){
//         return "medium"
//     }
//     else if(num < 20){
//         return "Large"
//     }
//     else if(num < 30){
//         return "Huge"
//     }
//     else{
//         return "Very huge"
//     }

// }
// console.log(testSize(50))

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", 
//             "Borgie", "Double Bogey", "Go Home!"]
// function golfScore(par, strokes){
//     if (strokes === 1){
//         return names[0]
//     }
//     else if (strokes <= par - 2){
//         return names[1]
//     }
//     else if(strokes === par - 1){
//         return names[2]
//     }
//     else if(strokes === par){
//         return names[3]
//     }
//     else if(strokes === par + 1){
//         return names[4]
//     }
//     else if(strokes === par + 2){
//         return names[5]
//     }
//     else {
//         return names[6]
//     }
// }
// console.log(golfScore(9, 1))

// function caseInSwitch(val){
//     var answer = "";
//     switch(val){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta"
//             break;
//     }
//     return answer;
// }
// console.log(caseInSwitch(4))

// function fruits(val){
// var answer = "";
// switch(val){
//     case "a":
//         answer = "apple"
//         break;
//     case "b":
//         answer = "orange"
//         break;
//     case "c":
//         answer = "grapes"
//         break;
//     case "d":
//         answer = "pine apple"
//         break;
//     }
//     return answer;
// }
// console.log(fruits("d"))

// function clrs(val){
//     var answer = ""
//     switch(val){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//             answer = "RED"
//             break;
//         case 5:
//         case 6:
//         case 7:
//             answer = "BLUE"
//             break;
//     }
//     return answer;
// }
// console.log(clrs(6))

// var count = 0
// function cc(card){
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count --;
//             break;       
//     }
//     var holdbet = "Hold"
//     if(count > 0) {
//         holdbet = "Bet"
//     }
//     return count + " " + holdbet;
// }
// cc(2); cc("K"); cc(7) ; cc("K"); cc("A");
// console.log(cc(4))

// var myDog = {
//     "name" : "Happy",
//     "legs" : 4,
//     "tails" : 1,
//     friends : 2
// }
// delete myDog.tails;
// console.log(myDog)
// // // var test = myDog.name;
// // var test = myDog["legs"];
// // console.log(test)

// function phoneticLookUp(val){
//     var result = "";
//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "denver",
//         "echo": "easy",
//         "foxtrop": "frank"

//     };
//     // switch(val){
//     //     case "alpha":
//     //         result = "Adams";
//     //         break;
//     //     case "bravo":
//     //         result = "Boston";
//     //         break;
//     //     case "charlie":
//     //         result = "Chicago";
//     //         break;
//     //     case "delta":
//     //         result = "denver"
//     //         break;
//     //     case "echo":
//     //         result = "easy"
//     //         break;
//     //     case "foxtrop":
//     //         result = "frank"
//     //         break;
//     // }
//     result = lookup[val];
//     return result;
// }
// console.log(phoneticLookUp("echo"))

// var myObj = {
//     gift : "pony",
//     pet : "kitten",
//     bed :"sleigh"
// };
//  function checkObj(checkProp){
//     if(myObj.hasOwnProperty(checkProp)){
//         return myObj[checkProp];
//     }else
//     return "Not Found"
//  }
//  console.log(checkObj("hello"))

// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release-year": 1973,
//         "formats":[
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true
//     },
//     {
//         "artist": "Beau Carnes",
//         "title": "cereal man",
//         "release-year": 2003,
//         "formats": [
//             "YouTube video"
//         ]
//     }
// ]
// // console.log(myMusic)
// var sol = myMusic[1].formats[0]
// console.log(sol)

// var collection = {
//     "2548": {
//         "album": "Slippery when wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let it Rock",
//             "You give love a bad name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "title red corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": [ ]
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// }
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateRecords(id, prop, value) {
//     if (value === ""){
//         delete collection[id][prop];
//     }else if(prop === "tracks"){
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     }else{
//         collection[id][prop] = value;
//     }
//     return collection;
// }
// updateRecords(2468, "tracks", "test");
// console.log(updateRecords(5439, "artist","ABBA"));

//                                      ITERATE WITH WHILE LOOP                             //

// var myArray = [];
// var i = 0;
// while (i < 5){
//     myArray.push(i);
//     i++;
// }
// console.log(myArray) 

// ITERATE WITH WHILE LOOP //

// var myArray = [];
// for (var i = 1; i < 6; i++){
//     myArray.push(i);
// }
// console.log(myArray)

//                                      ITERATE ODD NUMBERS WITH FOR LOOP                       //

// var myArray = [];
// for (var i = 1; i < 8; i+= 2){
//     myArray.push(i)
// }
// console.log(myArray)

// var myArray = [];
// for (i = 0; i < 100; i += 2){
//     myArray.push(i)
// }
// console.log(myArray)

// var myArray = [];
// for(i = 100; i>0; i-=2){
//     myArray.push(i)
// }
// console.log(myArray)

// var ourArr = [9, 10, 11, 12];
// var ourTotal = 0;
// for (var i =0; i < ourArr.length; i++){
//     ourTotal += ourArr[i];
// }
// console.log(ourTotal);

// var myArr = [2, 3, 4, 5, 6];
// var total = 0;
// for (var i = 0; i < myArr.length; i++){
//     total += myArr[i];
// }
// console.log(total)

//                                  NESTING FOR LOOPS                                       //

// function multiplyAll(arr){
//     var product = 1;
//     for (var i = 0; i < arr.length; i++){
//         for (var j = 0; j < arr[i].length; j++){
//             product *= arr[i][j]
//         }
//     }
//     return product;
// }
// var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(product);

//                                  ITERATE WITH DO WHILE LOOP

// var contacts = [
//     {
//         "firstName": "meenu",
//         "lastName": "kv",
//         "number": 3994873827,
//         "likes": ["pizza", "cutlet"]
//     },
//     {
//         "firstName": "john",
//         "lastName": "dude",
//         "number": 938748735,
//         "likes":["red", "white","pink"]
//     }
// ];
// function lookUpProfile(name,prop){
//     for (var i = 0; i < contacts.length; i++){
//         if(contacts[i].firstName === name){
//             return contacts[i][prop] || "No such property";
//         }
//     }
//     return "No such contact";
// }
// var data = lookUpProfile("john", "lastName");
// console.log(data)

// function randomFraction(){
//     return Math.floor(Math.random()*20);
// }
// console.log(randomFraction())

/*const sum = (function () {
    // return function sum(x, y, z){
    // const args = [x, y, z];
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    };
})();
console.log(sum(5, 98, 35, 34, 8, 76))

// ---------UDEMY PRACTICE SECTION ---------//

// Global scope
const me = "Anu";
const job = "web developer";
const year = 2022;

// Function scope
function calcAge(birthYear){
    const now = 2022;
    const age = now - birthYear;
    return age;
}

// Block scope
console.log(now); // Reference error

if(year >= 1981 && year <= 2000){
    const millenial = true;
    const food ="Juice";
}
console.log(food);// Reference error

const myName = "Anusha";
function first(){
    const age = 22;
    if (age >= 30){
        const decade = 3;
        var millenial = true;
    }
    function second(){
        const job = "teacher";
        console.log(`${myName} is a ${age}-year old ${job}`)
    }
    second();
}
first();*/

"use strict";
/*function calcAge(birthYear){
    const age = 2022 - birthYear;
    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 2000){
            var millenial = true;
            const firstName = "appzz";
            const str = `oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
            output = "NEW OUTPUT!"
        }
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output)
    }
    printAge();
    // console.log(firstName)
    return age;
}
const firstName = "Anu";
calcAge(2000);*/

// --------HOISTING------//
/*console.log(me); // Undefined
console.log(job); // Error
console.log(year); //Error

var me = "Jonas";
let job = "teacher";
const year = 2022;

var me = "Anusha";
let job = "teacher";
const year = 2022;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
};

// const addExpr = function (a, b){
var addExpr = function (a, b) {
    return a + b;
};

// const addArrow = (a, b) => a + b;
var addArrow = (a, b) => a + b;

// Example
console.log(undefined)
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted");
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    // console.log(this)
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
    year : 1991,
    calcAge : function(){
        console.log(this);
        console.log(2037 - this.year)
    }
};
jonas.calcAge();

const mary = {
    year: 2017
}
mary.calcAge = jonas.calcAge;
mary.calcAge();

const f = jonas.calcAge;
// f();

var firstName = "Matilda";
const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}
jonas.greet();

const jonas = {
    firstName: "jonas",
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        // solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996)
        };
        isMillenial();

    },
    // greet: function(){
    //     console.log(this);
    //     console.log(`Hey ${this.firstName}`);
    // }
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b){
console.log(arguments);
return a + b;
};
addExpr(2, 5);
addExpr(2, 4, 7, 8);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
addArrow (2, 5, 8);

let age = 22;
let oldAge = age;
age = 23;
console.log(age);
console.log(oldAge);

const me = {
    name: "Jonas",
    age: 30
};
const friend = me;
friend.age = 27;
console.log("friend :", friend)
console.log("Me", me)

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
}
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// Copying object
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice","Bob"]
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

// DESTRUCTURING ARRAYS
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);
const [s, , , u] = restaurant.categories;
console.log(s, u);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j)
const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES
const [p, q, r] = [8, 9];
console.log(p, q, r);

const [l=1, m=1, n=1]=[8,9];
console.log(l,m,n);*/

// DESTRUCTURING OBJECTS
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // orderDelivery: function(obj){
    //     console.log(obj);
    // }
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
}

restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({
    address: "Via del Sole, 21",
    starterIndex: 1,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
// const {fri} = openingHours;
// console.log(fri);

// const {
//     fri: { open, close }
// } = openingHours;
// console.log(open, close);

const {
    fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
console.log(o, c);


console.log(restaurant.order(1, 2))

// Spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const menu = [...newMenu, ...mainMenuCopy];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);
// const ingredients = [
//     prompt("let's make pasta! Ingreddient 1?"),
//     prompt("Ingredient 2?"),
//     prompt("Ingredient 3")
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ... restaurant, founder: "Guiseppe"};
const restaurantCopy = {...restaurant};
console.log(restaurantCopy.name);
console.log(restaurant.name);