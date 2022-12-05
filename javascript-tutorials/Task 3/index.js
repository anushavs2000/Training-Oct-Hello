let num1 = 15
let num2 = 5
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}
function substract() {
    let result = num1 - num2
    sumEl.textContent = "sum: " + result
}
function divide() {
    let result = num1 / num2
    sumEl.textContent = "sum: " + result
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "sum: " + result
}