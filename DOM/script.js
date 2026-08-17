let product = [
    { productName: "watch", image: "2.webp" },
    { productName: "watch1", image: "3].webp" },
    { productName: "watch2", image: "2.webp" },

    { productName: "watch", image: "2.webp" },
    { productName: "watch1", image: "3].webp" },
    { productName: "watch2", image: "2.webp" }
];

let p = document.getElementById("product");

product.forEach((item) => {

    p.innerHTML += `
        <div class="card">
            <img src="${item.image}" class="product-image"/>
            <h1>${item.productName}</h1>
            <button>Add to cart</button>
        </div>
    `

});