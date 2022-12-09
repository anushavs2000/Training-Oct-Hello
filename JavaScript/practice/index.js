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

function fruits(val){
var answer = "";
switch(val){
    case "a":
        answer = "apple"
        break;
    case "b":
        answer = "orange"
        break;
    case "c":
        answer = "grapes"
        break;
    case "d":
        answer = "pine apple"
        break;
    }
    return answer;
}
console.log(fruits("d"))