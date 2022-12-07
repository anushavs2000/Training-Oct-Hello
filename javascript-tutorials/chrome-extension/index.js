// function saveLead(){
//     console.log("Buttton clicked!")
// }
// let myLeads = ["www.sdkjfh.com"]
// myLeads = JSON.stringify(myLeads)
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.wweoi.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// let name = localStorage.getItem("myName")
// console.log(name)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

function renderLeads(leads) {
    let listItems = ""
   for (let i=0; i < leads.length; i++){
        listItems += `
             <li>
                 <a target='_blank' href='${leads[i]}'>
                      ${leads[i]}
                  </a>
             </li>
         `
   }
   ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dbclick", function(){
    // console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})
// console.log(ulEl)
inputBtn.addEventListener("click", function(){
//     // console.log("Button clicked")
    myLeads.push(inputEl.value)
//     // console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    // console.log( localStorage.getItem("myLeads"))
})



// function renderLeads(){
//     let listItems = ""
//     for (let i =0; i < myLeads.length; i++){
//         // listItems += "<li><a href='#'>" + myLeads[i] + "</a></li>"
//         listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
//     }
    // ulEl.innerHTML = listItems
// }
// let listItems = ""
// for (let i = 0; i < myLeads.length; i++){
    // listItems += "<li>" + myLeads[i] + "</li>"
    // console.log(myLeads[i])
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
// }
// ulEl.innerHTML = listItems
// let box = document.getElementById("box")
// box.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"
// shippingCost = 15
// shippingTime = "7 - 14 days"
// const fullPrice = basePrice - discount + shippingCost
// console.log("Total cost: " + fullPrice + "It will arrive in " +shippingTime)

// const recipient ="James"
// const sender = "Per Herald Borgen"
// const email = `Hey ${recipient}! How is it going? Cheers Per ${sender}`
// console.log(email)

// const recipient = "James"
// const sender = "Per Harald Borgen"
// const email = `
// Hey ${recipient}!

// How is it going?

// Cheers ${sender}
// `
// console.log(email)
// console.log(Boolean(""))
// console.log(Boolean("0"))
// console.log(Boolean(100))
// console.log(Boolean(null))
// console.log(Boolean([0]))
// console.log(Boolean(-0))