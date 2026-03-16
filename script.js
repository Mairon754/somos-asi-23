document.addEventListener("DOMContentLoaded",function(){

const startBtn=document.getElementById("startBtn")
const intro=document.getElementById("intro")
const main=document.getElementById("main")
const music=document.getElementById("music")

startBtn.onclick=function(){

intro.style.display="none"
main.classList.remove("hidden")

music.play()

startTyping()

}


// carrusel

const images=document.querySelectorAll(".slides img")
let index=0

document.getElementById("next").onclick=function(){

images[index].classList.remove("active")

index=(index+1)%images.length

images[index].classList.add("active")

}

document.getElementById("prev").onclick=function(){

images[index].classList.remove("active")

index=(index-1+images.length)%images.length

images[index].classList.add("active")

}


// poema

const poem=`Katherin...

Desde que apareciste en mi vida
algo cambió dentro de mí.

No importa la distancia,
ni el tiempo,
ni los caminos que tengamos que recorrer.

Siempre voy a estar para ti.

Gracias por ser como eres,
por tu sonrisa,
por tu forma de ver la vida
y hasta por esos pequeños enojos.

Porque incluso en ellos
sigues siendo increíble.

Solo quiero que sepas algo:

quiero que sigas en mi vida.

Hoy, mañana
y cada día que venga. 💖`

let i=0

function startTyping(){

const text=document.getElementById("text")

const interval=setInterval(()=>{

text.innerHTML+=poem[i]

i++

if(i>=poem.length){

clearInterval(interval)

}

},40)

}


// corazones

const hearts=document.querySelector(".hearts")

setInterval(()=>{

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="💖"

heart.style.left=Math.random()*100+"%"

heart.style.fontSize=Math.random()*20+10+"px"

hearts.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},300)


// pétalos

const petals=document.querySelector(".petals")

setInterval(()=>{

const petal=document.createElement("div")

petal.classList.add("petal")

petal.innerHTML="🌹"

petal.style.left=Math.random()*100+"%"

petal.style.fontSize=Math.random()*20+10+"px"

petals.appendChild(petal)

setTimeout(()=>petal.remove(),7000)

},400)

})