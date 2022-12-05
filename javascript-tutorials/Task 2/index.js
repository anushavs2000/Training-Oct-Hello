// let welcomeEl = document.getElementById("welcome-el")
// let name = "Thakkudu"
// let greeting = "Welcome Back "
// welcomeEl.innerText = greeting + name
let errorParagraph = document.getElementById("error")
console.log(errorParagraph)
function purchase(){
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}