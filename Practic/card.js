let product = [
    { ProductName: "watch","image" : "watch.webp",des:"Ved"},
    { ProductName: "EarBuds","image" : "earBuds.webp"},
    { ProductName: "watch","image" : "watch.webp"},
    { ProductName: "EarBuds","image" : "earBuds.webp"},
 
    
    { ProductName: "watch","image" : "watch.webp"},
    { ProductName: "EarBuds","image" : "earBuds.webp"},
    { ProductName: "watch","image" : "watch.webp"},
    { ProductName: "EarBuds","image" : "earBuds.webp"},
];

let image=document.getElementById("products")

product.forEach((item)=>{
image.innerHTML += `
    <div class="card">
        <img src="${item.image}"  />
            <h3>${item.ProductName}</h3>
            <p>${item.des}</p>
            <button>Add to cart</button>
    </div>

    `
})


