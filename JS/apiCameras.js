(function () {
    let wrapper = document.querySelector('#cameras-wrapper');
    let manager = new TeddiesManager(wrapper, 'http://localhost:3000/api/cameras');

})();