class CamerasManager {
    constructor(wrapper, url) {
        this.wrapper = wrapper;
        this.url = url;
        this.cameras = [];

        this.fetchAllCameras().then(function() {
            this.drawAllCameras();
        }.bind(this)); 
    }

    fetchAllCameras() {
        return new Promise(function (resolve, reject) {

            fetch(this.url).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        this.cameras = [];
                        for (let camera of data) {
                            this.teddies.push(
                                new Teddy(
                                    camera._id,
                                    camera.name,
                                    camera.price,
                                    camera.description,
                                    camera.imageUrl,
                                    camera.colors
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
        for (let camera of this.cameras) {
            console.log(camera);
            camera.draw(this.wrapper);
        }
    }
}

