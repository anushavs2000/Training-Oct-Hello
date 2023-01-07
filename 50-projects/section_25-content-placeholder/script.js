const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData(){
    header.innerHTML ='<img src="https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805?b=1&k=20&m=1182241805&s=612x612&w=0&h=8LGcGIlPCE1pEOKOqrN4WP-UsXobLqc4EnqC71niFrc=" alt=""/> '
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name.innerHTML = "John Doe"
    date.innerHTML = "Oct 08, 2020"

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}