
// inner text=html ke text ko read ya change krtra hai

let heading=document.getElementById("heading");
console.log(heading.innerText);
heading.innerText="change text"

//innerHTML=Element ke andra HTML content  add/change krna 

let box = document.getElementById("box")
console.log(box.innerHTML); //yaha kuch yah unvisible data ko bhi dikhata hainhi aayega kyu ki hmane div me kuch diya nhi tha 


box.innerHTML="change Box Name"
console.log(box.innerHTML); //yaha text add kr ke aata hai

let heading2=document.getElementById("heading2")
console.log(heading2.innerText);
heading2.innerText="heading2 Is change "
console.log(heading2.innerText);

//css lgana ya change krna






