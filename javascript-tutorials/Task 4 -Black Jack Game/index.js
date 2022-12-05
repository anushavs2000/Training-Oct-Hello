// let age = 120
// if (age < 100){
//     console.log("Not eligible")
// }
// else if (age === 100){
//     console.log("Here is your birthday card from King")
// }
// else{
//     console.log("Not eligible. You have already gotten one")
// }

// console.log(4 === 3)
// console.log(2 > 1)
// console.log(5 >=5)
// console.log(6 <= 9)
// console.log(3 < 6)

let firstCard = 10
let secondCard = 32
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
console.log(message-el)

function startGame(){

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "Wooho! You've got BlackJack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game!"
        isAlive = false
    }
    // console.log(message)
    messageEl.textContent = message
}
