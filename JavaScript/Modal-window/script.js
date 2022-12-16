"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModel = document.querySelector(".show-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");
console.log(btnsOpenModel);
// for(let i = 0; i < btnsOpenModel.length; i++){
//     console.log(btnsOpenModel[i].textContent);
// }
const openModel = function () {
    console.log("Button Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModel.length; i++)
    btnsOpenModel[i].addEventListener("click", openModel)
// btnsOpenModel[i].addEventListener("click", function () {
// console.log("Button Clicked");
// modal.classList.remove("hidden");
// overlay.classList.remove("hidden");
// modal.style.display = "block";
// })
/*btnCloseModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})
overlay.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})*/
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function (e) {
    // console.log("A key was pressed")
    console.log(e.key)
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        // console.log("Esc was pressed")
            closeModal();
    }
})