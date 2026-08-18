let head=document.getElementById("heading")
console.log(head.innerHTML);

head.style.color="red"
head.style.backgroundColor="green"
head.style.fontSize="60px"

//Multiple CSS Properties change krna

let boxId=document.querySelector("#box")

boxId.style.color="blue"
boxId.style.width="200px"
boxId.style.height="100px"

//Attribute change krna 

let NewPhoto=document.getElementById("Oldphoto")
NewPhoto.src="earBuds.webp" //HTML attributes ko JavaScript se change kar sakte hain.

//Get Attribute
let image=document.getElementById("Oldphoto")
console.log(image.getAttribute("src"));

//setAttribute

let link =document.querySelector("a")
link.setAttribute("href","https://www.youtube.com/")

//removeAttribute

link.removeAttribute("href")


