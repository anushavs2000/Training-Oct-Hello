// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!</button>"
// function buy(){
//     container.innerHTML += "<p>Thank youu for buying!</p>"
// }

// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// points += 100
// hasWon = false

// if (hasWon) {
//     console.log(`${player} got " ${points} points and won the ${game} game!`)
// }
// else {
//     console.log(`The winner is ${opponent} ! ${player} lost the game`)
// }

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
// function logItems(arr){
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }
// logItems(myCourses)

// // localStorage.setItem("myCredits", "100")
// let myCredits = localStorage.getItem("myCredits")
// console.log(myCredits)

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// const janeBtn = document.getElementById("jane-btn")
// janeBtn.addEventListener("click", function(){
//     console.log(data[0].score)
// })
  
// function generateSentence(desc, arr){
//     let baseString = `The ${arr.length} ${desc} are`
//     const lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex){
//             baseString += arr[i]
//         }
//         else{
//         baseString += arr[i] + ", "
//         }
//     }
//     return baseString
// }
// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
// console.log(sentence)

const imgs = [
    "assets/img-1.jpg",
    "assets/img-2.jpg",
    "assets/img-3.jpg"
]
const container = document.getElementById("container")
function renderImages(){
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++){
        imgsDOM += `<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()
