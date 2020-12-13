class Commande {

    addItemInCommande(item, id) {
        if (localStorage.getItem(item) == null) {
            var contenu_panier = [];
        }
        else {
            contenu_panier = JSON.parse(localStorage.getItem(item));
        }

        TeddiesManager.fetchOneTeddyById(id).then(data => {
            localStorage.setItem(item, JSON.stringify(contenu_panier));
            console.log(contenu_panier);
        });
    }

    GetAllItemFromCommande(item) {
        let getcommande = JSON.parse(localStorage.getItem(item));
        return getcommande;
    }
}

let ajouter_panier = document.getElementById('ajouter-panier');
    ajouter_panier.addEventListener('click', () => {
        Commande.addItemInCommande('teddy', id);
    });





