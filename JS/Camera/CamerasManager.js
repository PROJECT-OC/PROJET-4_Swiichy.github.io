class CamerasManager {
    constructor(wrapper, url) {
        this.wrapper = wrapper;
        this.url = url;
        this.cameras = []; 
    }

    fetchAllCameras() {
        return new Promise(function (resolve, reject) {

            fetch(this.url).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        this.cameras = [];
                        for (let camera of data) {
                            this.cameras.push(
                                new Camera(
                                    camera._id,
                                    camera.name,
                                    camera.price,
                                    camera.description,
                                    camera.imageUrl,
                                    camera.lenses
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

    fetchOneCameraById(id) {
        return new Promise(function (resolve, reject) {
            //'http://localhost:3000/api/teddies/ + id'
            fetch([this.url, id].join('/')).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        let camera = new Camera(
                            data._id,
                            data.name,
                            data.price,
                            data.description,
                            data.imageUrl,
                            data.lenses
                        )
                        resolve(camera)
                    }.bind(this));
                } else {
                    reject('pas ok!');
                }
            }.bind(this));
        }.bind(this));
    }

    drawAllCameras() {
        for (let camera of this.cameras) {
            //console.log(camera);
            camera.drawInList(this.wrapper);
        }
    }
}

