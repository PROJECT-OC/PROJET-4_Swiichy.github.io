class FurnituresManager {
    constructor(wrapper, url) {
        this.wrapper = wrapper;
        this.url = url;
        this.furnitures = [];

        this.fetchAllFurnitures().then(function() {
            this.drawAllFurnitures();
        }.bind(this)); 
    }

    fetchAllFurnitures() {
        return new Promise(function (resolve, reject) {

            fetch(this.url).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        this.furnitures = [];
                        for (let furniture of data) {
                            this.furnitures.push(
                                new Furniture(
                                    furniture._id,
                                    furniture.name,
                                    furniture.price,
                                    furniture.description,
                                    furniture.imageUrl,
                                    furniture.colors
                                )
                            );
                        }
                        resolve()
                    }.bind(this));
                } else {
                    reject('pas ok!');
                }
            }.bind(this));
        }.bind(this));
    }

    drawAllFurnitures() {
        for (let furniture of this.furnitures) {
            console.log(furniture);
            furniture.draw(this.wrapper);
        }
    }
}