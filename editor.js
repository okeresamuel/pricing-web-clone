let box = document.querySelector("#box")
let arrow = document.querySelector("#first_icon")
function show(){
    box.classList.toggle("box")   
}
arrow.addEventListener("click", show)


//Ads info for onmouseover
let psd = document.querySelector("#psd_image")
let element = document.createElement("p")
 let p = document.querySelector("#text")
function info(){
   element.innerHTML="Ads were closed by samuel"
  element.style.textAlign="center"
  p.insertAdjacentElement("afterend", element)
}
psd.addEventListener("mouseover", info)

//removing info for onmouseover

let psdtwo = document.querySelector("#psd_image")
function infoOut(){
    element.innerHTML=""
}
psdtwo.addEventListener("mouseout", infoOut)
