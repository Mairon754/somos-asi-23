function startExperience(){

document.querySelector(".intro").style.display="none"
document.querySelector(".main").classList.remove("hidden")

}


const images=document.querySelectorAll(".slides img")

let index=0

document.querySelector(".next").onclick=()=>{

images[index].classList.remove("active")

index=(index+1)%images.length

images[index].classList.add("active")

}

document.querySelector(".prev").onclick=()=>{

images[index].classList.remove("active")

index=(index-1+images.length)%images.length

images[index].classList.add("active")

}


// corazones flotando

const hearts=document.querySelector(".hearts")

setInterval(()=>{

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="💖"

heart.style.left=Math.random()*100+"%"

heart.style.fontSize=Math.random()*25+10+"px"

hearts.appendChild(heart)

setTimeout(()=>{

heart.remove()

},6000)

},250)