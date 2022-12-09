// document.getElementById("count-el").innerText = 5
// function increment() {
//     console.log("The button was clicked")
// }
// increment()
// function mylogger(){
//     console.log(42)
// }
// mylogger()
// sum lap times
// let lap1 = 30
// let lap2 = 34
// let lap3 = 42
// function lapTotal() {
//     lapTotal = lap1 + lap2 + lap3
//     console.log(lapTotal)
// }
// lapTotal()
// let count = 0
// function increment(){
//     count = count + 1
//     console.log(count)
// }
// increment()
// increment()
// increment()
// increment()
// increment()
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// // console .log(countEl)
// let count = 0
// function increment() {
//     // count = count + 1
//     count += 1
//     countEl.innerText = count
// }
// function save(){
//     let countStr = count + "-"
//     saveEl.innerText += countStr
//     countEl.textContent = 0
//     count = 0
//     // console.log(count)
// }
// let username = "Anusha"
// let messege = "You have 4 notifications"
// let messegeToUser = username + "," + messege  +"!"
// console. log(messegeToUser)
// let username = "Anusha "
// let messege = "You have 4 notifications !"
// let messegeToUser = username  + messege 
// console. log(messegeToUser)
// let person = {
//     name: "Anu",
//     age: 22 ,
//     country: "Norway"
// }
// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in" + person.country)
// }
// logData()
// let age = 105
// if (age < 6){
//     console.log("free")
// }
// else if (age < 18){
//     console.log("child discount")
// }
// else if (age < 27){
//     console.log("student discount")
// }
// else if (age < 67){
//     console.log("full price")
// }
// else{
//     console.log("senior citizen discount")
// }
// console.log("The 5 largest countries in the world:")
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }
// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekday = "Friday"
// if(dayOfMonth === 13 && weekday === "Friday"){
//     console.log("😱")
// }
// let hands = ["rock", "paper", "scissor"]
// function getHand(){
//     let randomIndex = Math.floor (Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())

// let fruit = ["🍎","🍊","🍎","🍎","🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")
// function sortFruit(){
//     for(let i = 0; i < fruit.length; i++){
//             if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         }
//         else if(fruit[i] === "🍊"){
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }
// sortFruit()

// let a = 0
// let b = 35
// let c = 35
// function getGreatestNumber(){
//     if (a >= b && a >= c){
//         return a
//     }
//     else if (b >= a && b >= c){
//         return b
//     }
//     else {
//         return c
//     }
// }
// let gretestNumber = getGreatestNumber()
// console.log(gretestNumber)

let number = 97
let r = 0
let prime = "Pime Number"
let nprime = "Not a Prime Number"
function getPrimeNumber(){
    if (number === 0 || number === 1){
        // console.log("Not a prime")
        return nprime
    }
    else{    
            for (let i = 0; i <= number; i++ ){
        
            if(number % i === 0){
                r++
            }
            // console.log(r)
        }
        if(r < 3){
            // console.log("prime")
            return prime
        }
        else {
            // console.log("Not a prime")
            return nprime
        } 
    }
}
let primeNumber = getPrimeNumber()
console.log(primeNumber)