const imgContainer = document.getElementById('img_container')
const cardHeading =document.getElementById('card_heading')
const cardText = document.getElementById('card_text')
 const profileImgContainer = document.getElementById('profile_img_container')
 const profileInfo = document.getElementById('profile_info')
 const date = document.getElementById('date')
const animatedBackground = document.querySelectorAll('.animated')

    setTimeout(getData, 3000)

 function getData(){
    imgContainer.innerHTML = '<img src="assets/photo-1661956602139-ec64991b8b16.avif">'
    cardHeading.innerHTML = 'Lorem ipsum dolor sit amet.'
    cardText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quia reprehenderit similique facere, soluta repellat!'
    profileImgContainer.innerHTML = `<img src="assets/photo-1438761681033-6461ffad8d80.avif">`
    profileInfo.innerHTML = `Emma John`
    date.innerHTML = `Oct 10, 2022`
    animatedBackground.forEach(bg => bg.classList.remove('animated'))

 }