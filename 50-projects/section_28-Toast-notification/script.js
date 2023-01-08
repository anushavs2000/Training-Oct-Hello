const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four"
]

button.addEventListener("click", () => createNotification('This is invalid data'))

function createNotification(message = null, type = null){
    // console.log(123)
    const notif = document.createElement("div")
    notif.classList.add("toast")
    notif.classList.add(type ? ty)

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}