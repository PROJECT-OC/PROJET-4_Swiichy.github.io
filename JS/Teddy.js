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
            <h1>${this.name}</h1>
            <p>${this.description}</p>
        </div>`;
        wrapper.insertAdjacentHTML('beforeend', html);
    }
}

