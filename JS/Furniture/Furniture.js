class Furniture {
    constructor(id, name, price, description, imageUrl, varnish) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.varnish = varnish;
    }


    drawInList(wrapper) {
        //console.log(this.name);
        let html = `<div class="content-product">
            <a class="a-productbyid" href="information.html?id=${this.id}"> 
            <img class="img-product" src="${this.imageUrl}">
            <div class="botside-product">
            <h3 class="name-product">${this.name}</h3>
            <p class="price-product">${this.price/100},${this.price%100}${this.price%100}€</p>
            </div>
            </a>
        </div>`;
        wrapper.insertAdjacentHTML('beforeend', html);
    }

    draw(wrapper) {
        //console.log(this.name);
        //insérer la function puis insérer le nom de la variable dans le href.
        let options = '';
        for (let varnishs of this.varnish) {
            options += `<option value="${varnishs.toLowerCase()}">${varnishs}</option>`;
        }

        let html = `<div class="content-product">
                        <div class="content-img">
                            <img class="img-product" src="${this.imageUrl}">
                        </div>
                        <div class="botside-product">
                            <h3 class="name-product">${this.name}</h3>
                            <p class="price-product">${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR'
                                }).format(this.price / 100)}</p>
                            <p class="description-product">${this.description}</p>
                            <div class="content-select_button">
                                <div class="content-select>
                                    <label for="pet-select">Couleur aux choix:</label>
                                <select name="colors" id="color-select">
                                    ${options}
                                </select>
                            </div>
                            <div class="content-button">
                                <button type="button" class="btn btn-outline-secondary">
                                    <i class="fas fa-cart-plus"></i>
                                    <span class="color-text_button">
                                    Ajouter au panier</span>
                                </button>
                            </div>
                        </div>
                    </div>`;
        wrapper.insertAdjacentHTML('beforeend', html);
    }
}


