class Teddy {
    constructor(id, name, price, description, imageUrl, colors) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.color = colors;
    }

    draw(wrapper) {
        console.log(this.name);
        let html = `<div>
            <img class="teddies-size" src="${this.imageUrl}">
            <h1 class="teddies-title">${this.name}</h1>
            <p class="teddies-price">${this.price}</p>
        </div>`;
        wrapper.insertAdjacentHTML('beforeend', html);
    }
}

