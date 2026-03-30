console.log("chalange3  pour le jeudi ================> ");
const tauxDeChange = {
  USD: 1.08,
  GBP: 0.86,
  MAD: 10.85,
  JPY: 162.5,
  CAD: 1.47
};

let historique = [];

function convertir(montant, deviseSource, deviseCible){
    
    let montantEuro = montant / tauxDeChange[deviseSource];

    let resultat = montantEuro * tauxDeChange[deviseCible]

    historique.push({
        montant : montant,
        deviseSource : deviseSource,
        deviseCible: deviseCible,
        date : new Date()
    })
    return resultat;
}   

let panier = [100, 800, 35, 6]

function convertePanier(panier, deviseSource, deviseCible){
        let result = []
        for(let i = 0; i <panier.length;i++){
            let item = (convertir(panier[i],deviseSource, deviseCible)).toFixed(2)
            result.push(item);
        }
        return result;

}

function meilleurTaux(montant, deviseSource){
        let meilleurTaux = [];
        let devises = Object.keys(tauxDeChange);

        for(let i = 0;  i < devises.length; i++){
            let item = convertir(montant, deviseSource, devises[i])
            meilleurTaux.push(item);
        }
        return meilleurTaux;
}

function Afficheshistorique(){

    for(let i = 0; i <historique.length;i++){
        let h = historique[i];
        console.log(`${h.date} : ${h.montant} : ${h.deviseSource} : ${h.deviseCible}`)
    }

}

function statistiques(){

    let freDevise = {}
    let totalConvertie = 0;
    let maxConverstion = historique[0];

    for(let i =0 ; i <historique.length ;i++){

        if(freDevise[historique[i].deviseCible]){
            freDevise[historique[i].deviseCible] += 1;
        }else{
             freDevise[historique[i].deviseCible] = 1;
        }

        totalConvertie += historique[i].montant
    }
}




console.log(meilleurTaux(100, "USD"))

console.log(convertir(100, "MAD", "USD"));
console.log(convertePanier(panier, "USD", "MAD"));
Afficheshistorique()