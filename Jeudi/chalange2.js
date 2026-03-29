
console.log("chalange 2 de le jeudi ======>");


let panier = [
  {
    produit: [
        {id: 1, nom: "PC portable", prix: 1200, stock_disponible: 7}
        ],
    quantite: 5
  },
];
let count = 1;

    function ajouterProduitAuPanier(nom, prix, stockDisponible){

        for(let i =0; i <panier.length;i++){
            if(panier[i].produit.nom === nom && panier[i].quantite + 1 <= panier[i].produit.stock_disponible){
                panier[i].quantite++;
            }
            let newArt = {
                produit : {id : ++count, nom: nom, prix: prix, stock_disponible: stockDisponible},
                quantite: 1
            }
            newArt.push(panier);
        }
        
}

function ModifierQuantite(produitNom, newQuantite){

    let produit = panier.filter(p => p.produit.nom === produitNom);

    if(newQuantite <= produit.produit.stock_disponible){
        produit.quantite = newQuantite;
    }else{
        console.log('quantiete depasser le stock disponibles');
    }

}

function SupprimerArticle(nomArt){

    let index = panier.findIndex(a => a.produit.nom === nomArt);

   if(index !== -1){
     panier.slice(index, 1);
   }else {
        console.log("cette article n'est pas existe dans le panier");
   }

}