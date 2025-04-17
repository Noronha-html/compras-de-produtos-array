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
        <button type="button" class="button">Comprar</button>
        `
    });
}

InstantiateProducts();