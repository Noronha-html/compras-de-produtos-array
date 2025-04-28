const container = document.getElementById("container");

const elements = [
    {
        img: "./img/ovoPascoa.jfif",
        name: "Ovo de páscoa",
        price: 80
    },

    {
        img: "./img/iphone.jfif",
        name: "Iphone",
        price: 1800
    },

    {
        img: "./img/chocolate.jpg",
        name: "Chocolate",
        price: 10
    },

    {
        img: "./img/ps5.jpg",
        name: "Playstation 5",
        price: 10
    },

    {
        img: "./img/spotify.jpg",
        name: "Gift Card Spotify",
        price: 10
    }
];

function InstantiateProducts()
{
    elements.forEach(element => {
        let product = document.createElement("div");
        product.classList.add("product");
        container.appendChild(product);
        product.innerHTML = `
        <img class="img" src="${element.img}">
        <span class="name">${element.name}</span>
        <span class="price">${"R$" + element.price}</span>
        <button onclick="AddToCart('${element.img}', '${element.name}', ${element.price})" class="button">Comprar</button>
        `
    });
}

const cart = [];

function AddToCart(productImg, productName, productPrice)
{
    let existingProduct = cart.find(item => item.name === productName);

    if(existingProduct)
    {
        console.log("funcionou");
        existingProduct.quantity += 1;
    }
    else
    {
        cart.push({name: productName, price: productPrice, img: productImg, quantity: 1});
    }

    RenderCart();
}

function RemoveFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex > -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        } else {
            cart.splice(productIndex, 1);
        }
    }
    RenderCart();
}

function RenderCart()
{
    let divCart = document.getElementById("cart");

    if(divCart.classList.contains("noCart"))
    {
        divCart.classList.remove("noCart");
        divCart.classList.add("cart");
    }

    let title = document.getElementById("title");

    if(title.classList.contains("noTitle"))
    {
        title.classList.remove("noTitle");
        title.classList.add("title");
        title.innerHTML = "Carrinho"
    }

    let buyAll = document.getElementById("buyAll");

    if(buyAll.classList.contains("noBuyAll"))
    {
        buyAll.classList.remove("noBuyAll");
        buyAll.classList.add("buyAll");
        buyAll.innerHTML = "Comprar tudo!"
    }

    cart.forEach(item => {
        let cartProduct = document.createElement("div");
        cartProduct.classList.add("cartProduct");
        cartProduct.innerHTML = `
            <img class="cartProduct-img" src="${item.img}">
            <h1 class="cartProduct-name">${item.name}</h1>
            <span class="cartProduct-price">${item.price}</span>
        `;
        divCart.appendChild(cartProduct);
    })
}

InstantiateProducts();