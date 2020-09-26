class Camera {
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
            <img class="cameras-size" src="${this.imageUrl}">
            <h1 class="cameras-title">${this.name}</h1>
            <p class="cameras-price">${this.price/100},${this.price%100}${this.price%100}€</p>
        </div>`;
        wrapper.insertAdjacentHTML('beforeend', html);
    }
}


