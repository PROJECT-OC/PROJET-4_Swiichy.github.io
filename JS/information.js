(function () {
    let url = new URL(document.location);
    let parametre = url.searchParams;
    let id = parametre.get('id');
    //console.log(url)

    let manager = new TeddiesManager(undefined, 'http://localhost:3000/api/teddies');
    manager.fetchOneTeddyById(id).then(function (teddy) {
        //console.log(teddy);

        let wrapper = document.querySelector('#teddy-wrapper');
        teddy.draw(wrapper);
    });
})();

(function () {
    let url = new URL(document.location);
    let parametre = url.searchParams;
    let id = parametre.get('id');
    //console.log(url)

    let manager = new CamerasManager(undefined, 'http://localhost:3000/api/cameras');
    manager.fetchOneCameraById(id).then(function (camera) {
        //console.log(camera);

        let wrapper = document.querySelector('#camera-wrapper');
        camera.draw(wrapper);

    });
})();

(function () {
    let url = new URL(document.location);
    let parametre = url.searchParams;
    let id = parametre.get('id');
    //console.log(url)

    let manager = new FurnituresManager(undefined, 'http://localhost:3000/api/furniture');
    manager.fetchOneFurnitureById(id).then(function (furniture) {
        //console.log(furniture);

        let wrapper = document.querySelector('#furniture-wrapper');
        furniture.draw(wrapper);

    });
})();

