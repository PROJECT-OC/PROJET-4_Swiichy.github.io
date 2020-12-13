// Function permettant de récupérer ma div principale contenant les éléments a afficher.
// Création de la classe TeddiesManager (contenant ma variable wrapper et l'url de l'api)
// Appel des deux fonction (fetchAllTeddies va permettre de déclencher la fonction drawAllTeddies si il n'y a aps d'erreurs de promesse).

(function () {
    let wrapper = document.querySelector('#teddies-wrapper');
    let manager = new TeddiesManager(wrapper, 'http://localhost:3000/api/teddies');

    manager.fetchAllTeddies().then(function () {
        manager.drawAllTeddies();
    })
})();











