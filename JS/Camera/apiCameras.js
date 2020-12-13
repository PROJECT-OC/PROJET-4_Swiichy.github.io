(function () {
    let wrapper = document.querySelector('#cameras-wrapper');
    let manager = new CamerasManager(wrapper, 'http://localhost:3000/api/cameras');

    manager.fetchAllCameras().then(function() {
        manager.drawAllCameras();
    });
})();