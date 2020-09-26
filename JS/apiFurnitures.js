(function () {
    let wrapper = document.querySelector('#furnitures-wrapper');
    let manager = new FurnituresManager(wrapper, 'http://localhost:3000/api/furniture');

})();