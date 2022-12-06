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
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console .log(countEl)
let count = 0
function increment() {
    // count = count + 1
    count += 1
    countEl.innerText = count
}
function save(){
    let countStr = count + "-"
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
    // console.log(count)
}
// let username = "Anusha"
// let messege = "You have 4 notifications"
// let messegeToUser = username + "," + messege  +"!"
// console. log(messegeToUser)
// let username = "Anusha "
// let messege = "You have 4 notifications !"
// let messegeToUser = username  + messege 
// console. log(messegeToUser)