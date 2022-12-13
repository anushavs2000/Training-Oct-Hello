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

const sum = (function () {
    // return function sum(x, y, z){
    // const args = [x, y, z];
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    };
})();
console.log(sum(5, 98, 35, 34, 8, 76))