class FurnituresManager {
    constructor(wrapper, url) {
        this.wrapper = wrapper;
        this.url = url;
        this.furnitures = [];
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
                                    furniture.varnish
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

    fetchOneFurnitureById(id) {
        return new Promise(function (resolve, reject) {
            //'http://localhost:3000/api/furniture/ + id'
            fetch([this.url, id].join('/')).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        let furniture = new Furniture(
                            data._id,
                            data.name,
                            data.price,
                            data.description,
                            data.imageUrl,
                            data.varnish
                        )
                        resolve(furniture)
                    }.bind(this));
                } else {
                    reject('pas ok!');
                }
            }.bind(this));
        }.bind(this));
    }

    drawAllFurnitures() {
        for (let furniture of this.furnitures) {
            //console.log(furniture);
            furniture.drawInList(this.wrapper);
        }
    }
}