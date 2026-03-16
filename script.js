document.addEventListener("DOMContentLoaded",function(){

const startBtn = document.getElementById("startBtn")
const intro = document.getElementById("intro")
const main = document.getElementById("main")

startBtn.onclick = function(){

intro.style.display="none"
main.classList.remove("hidden")

}


// carrusel

const images = document.querySelectorAll(".slides img")

let index = 0

document.getElementById("next").onclick = function(){

images[index].classList.remove("active")

index = (index + 1) % images.length

images[index].classList.add("active")

}

document.getElementById("prev").onclick = function(){

images[index].classList.remove("active")

index = (index - 1 + images.length) % images.length

images[index].classList.add("active")

}


// corazones flotando

const hearts = document.querySelector(".hearts")

setInterval(()=>{

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="💖"

heart.style.left=Math.random()*100+"%"

heart.style.fontSize=Math.random()*20+10+"px"

hearts.appendChild(heart)

setTimeout(()=>{

heart.remove()

},6000)

},300)

})