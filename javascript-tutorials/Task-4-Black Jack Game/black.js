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

// let firstCard = 10
// let secondCard = 32
let player = {
    name: "Anu",
    chips: 200,
    // sayHello: function(){
    //     console.log("Heisann!")
    // }
}
// player.sayHello()
// let player = {
//     name: "Anu",
//     chips: 200
// }
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// console.log(playerEl)
// console.log(messageEl)
// console.log(sumEl)
function getRandomCard(){
    let randomNumber = Math.floor (Math.random() * 13) + 1
    if (randomNumber > 10 ){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame(){
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
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
function newCard(){
    // console.log("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackJack === false){
        let card = 6
        sum += card
        cards.push(card)
        // console.log(cards)
        renderGame()
    }
}

// let featuredPosts = ["Checkout my Netflix clone", "Here's the code for my project", "I've just relaunched my portfolio"]
// console.log(featuredPosts[1])
// console.log(featuredPosts[0])
// console.log(featuredPosts[2])
// console.log(featuredPosts.length)

// let cards = [7, 4]
// cards.push(6)
// let messages = ["Hey, how's it going", "I'm great thank you! How about you?",
//                "All good. Been working on my portfolio lately"]
// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop()
