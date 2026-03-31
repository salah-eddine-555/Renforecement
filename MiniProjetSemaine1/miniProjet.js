

console.log('mini projet ===================>');

let utilisateurs = [
  {
    id: 1,
    pseudo: "AliDev",
    email: "ali@example.com",
    role: "vendeur",
    noteMoyenne: 4.5,
    solde: 1200
  },
  {
    id: 2,
    pseudo: "SaraDev",
    email: "sara@example.com",
    role: "acheteur",
    noteMoyenne: 4.2,
    solde: 300
  },
  {
    id: 3,
    pseudo: "YoussefTech",
    email: "youssef@example.com",
    role: "vendeur",
    noteMoyenne: 4.8,
    solde: 2500
  },
  {
    id: 4,
    pseudo: "OrhlanMarket",
    email: "Orhlan@example.com",
    role: "acheteur",
    noteMoyenne: 3.9,
    solde: 150
  },
  {
    id: 5,
    pseudo: "OmarStore",
    email: "omar@example.com",
    role: "vendeur",
    noteMoyenne: 4.6,
    solde: 1800
  }
];

let Annonces = [];

let count = 0;
function pulierAnnonce(id_vendeur,titre, description,prix,categorie,etat,statut){

    let vendeur = utilisateurs.find(u => u.id == id_vendeur);

    if(vendeur.role === 'vendeur'){
        let annonce = {
            id: ++count,
            titre: titre,
            description: description,
            prix: prix,
            categorie: categorie,
            etat: etat,
            statut: statut,
            id_vendeur : id_vendeur,
            date_publication: new Date()
        }
        Annonces.push(annonce);
    }
}

function ModiferPrix(id_annonce, newprix){

    let annonce = Annonces.find(a => a.id === id_annonce);

    if(annonce && newprix >= 0){
        annonce.prix = newprix;
    }
    console.log(annonce);

}

function ReterieAnnonce(id_annonce){

    let index = Annonces.findIndex(a=> a.id == id_annonce);
   
        Annonces.splice(index, 1);
        console.log('annonce est supprimee avec successs');
}

function RecherchePrMoteCle(motecle){

    for(let i = 0; i < Annonces.length; i++){
        if(Annonces[i].titre === motecle || Annonces[i].description === motecle){
            console.log(Annonces[i])
        }
    }
}

function RechercheParCategorie(categorie){

        let result = Annonces.filter(a => a.categorie.toLowerCase() === categorie.toLowerCase());
        console.log('resultats', result);    
}

function TriParPrix(min, max){
    let AnnoncesPrix = [];
    for(let i = 0; i < Annonces.length; i++){

            if(Annonces[i].prix <= max && Annonces[i].prix >= min){
                AnnoncesPrix.push(Annonces[i]);
            }

            return AnnoncesPrix;
    }
}



function AcheterAnnonce(id_acheteur, id_annonce){

    let acheteur = utilisateurs.find(u => u.id === id_acheteur);
    
    let annonce = Annonces.find(a =>  a.id === id_annonce);
    
    

    if(acheteur && annonce){
        let vendeur = utilisateurs.find(u=> u.id === annonce.id_vendeur)

        if(!vendeur){
            return 0;
        }
        if(annonce.statut === 'disponible'){
            if(acheteur.solde >= annonce.prix){
                    acheteur.solde -= annonce.prix;
                    let comission = annonce.prix * 0.05;
                    vendeur.solde += annonce.prix - comission;
                    annonce.statut = 'vendu'

                    let historique = {
                        date: new Date(),
                        acheteur_id: acheteur.id,
                        vendeur_id: vendeur.id,
                        annonce: annonce.titre,
                        montant: annonce.prix,
                        comission: comission
                    }

                    console.log('operation est reussie  : ', historique);

            }
        }
    }
}

let transactions = []
let transaction_id = 0;
function NoterVendeur(id_acheteur, id_vendeur,annonce_id, note, comment){
  
    let acheteur =  utilisateurs.find(u => u.id === id_acheteur);
    let vendeur = utilisateurs.find(u=> u.id === id_vendeur);

    if(!acheteur || !vendeur){
        console.log('le vendeur au l acheteur n existe pas');
        return;
    }

    if(note < 1 || note > 5){
        console.log('la note entre 1 et 5 oblegatoire');
        return;
    }

    let transation = transactions.find(t => t.vendeur_id === vendeur.id && t.acheteur_id === acheteur.id && t.annonce_id === annonce_id);

    if(!transation){
        return;
    }
    if(transation.note){
        console.log('ce acheteur deja note ce vendeur');
        return;
    }
   

                let transaction = {
                id: ++transaction_id,
                acheteur_id: acheteur.id,
                vendeur_id: vendeur.id,
                annonce_id: annonce_id,
                note:  note,
                comment: comment
                }
            transactions.push(transaction);
             console.log(transaction);
        
    
}


pulierAnnonce(1,'annonce1', 'description',300,'Électronique', 'bon','disponible');
ModiferPrix(1, 500);

console.log("------------------")
RechercheParCategorie("Électronique");
console.log(TriParPrix(300, 600));

// ReterieAnnonce(1)
// console.log(Annonces);
