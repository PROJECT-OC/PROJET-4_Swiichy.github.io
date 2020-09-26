class TeddiesManager {
    constructor(wrapper, url) {
        this.wrapper = wrapper;
        this.url = url;
        this.teddies = [];

        this.fetchAllTeddies().then(function() {
            this.drawAllTeddies();
        }.bind(this)); 
    }

    fetchAllTeddies() {
        return new Promise(function (resolve, reject) {

            fetch(this.url).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        this.teddies = [];
                        for (let teddy of data) {
                            this.teddies.push(
                                new Teddy(
                                    teddy._id,
                                    teddy.name,
                                    teddy.price,
                                    teddy.description,
                                    teddy.imageUrl,
                                    teddy.colors
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

    drawAllTeddies() {
        for (let teddy of this.teddies) {
            console.log(teddy);
            teddy.draw(this.wrapper);
        }
    }
}

