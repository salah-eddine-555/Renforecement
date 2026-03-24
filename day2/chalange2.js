
let ventes = [
    {
        mois: 1,
        chiffre_affaires : 200,
        nb_clients : 30,
        ville : 'casablanca'
    },
    {
        mois: 2,
        chiffre_affaires : 300,
        nb_clients : 32,
        ville : 'rabat'
    },
    {
        mois: 3,
        chiffre_affaires : 100,
        nb_clients : 13,
        ville : 'Kenetra'
    },
    {
        mois: 4,
        chiffre_affaires : 500,
        nb_clients : 40,
        ville : 'tanger'
    },
    {
        mois: 5,
        chiffre_affaires : 250,
        nb_clients : 28,
        ville : 'fes'
    },
    {
        mois: 6,
        chiffre_affaires : 160,
        nb_clients : 22,
        ville : 'meknese'
    },
    {
        mois: 7,
        chiffre_affaires : 8000,
        nb_clients : 40,
        ville : 'mohmadia'
    },
    {
        mois: 8,
        chiffre_affaires : 500,
        nb_clients : 40,
        ville : 'marakech'
    },
    {
        mois: 9,
        chiffre_affaires : 170,
        nb_clients : 20,
        ville : 'agadir'
    },
    {
        mois: 10,
        chiffre_affaires : 200,
        nb_clients : 35,
        ville : 'Tarodante'
    },
    {
        mois: 11,
        chiffre_affaires : 6000,
        nb_clients : 33,
        ville : 'Ifni'
    },
    {
        mois: 12,
        chiffre_affaires : 100,
        nb_clients : 20,
        ville : 'Geulmime'
    },
]



let totalChiifreAffaire = 0;
let chiffreMoyenne = 0;
let meilleurChiffreAffaire = 0;
let moinNbrClient = ventes[0].nb_clients;
for(i = 0; i < ventes.length; i++){
    
    totalChiifreAffaire += ventes[i].chiffre_affaires;
    chiffreMoyenne = (totalChiifreAffaire/12).toFixed(2);

    if(meilleurChiffreAffaire < ventes[i].chiffre_affaires){
        meilleurChiffreAffaire = ventes[i].chiffre_affaires
    }
    if(ventes[i].nb_clients < moinNbrClient){
        moinNbrClient = ventes[i].nb_clients;
    }
    

}






console.log('total chiffre affaire: ', totalChiifreAffaire, 'dh');
console.log('la moyenne chiffre affaire: ', chiffreMoyenne, 'dh');
let meilleurMois = ventes.find(mois => mois.chiffre_affaires === meilleurChiffreAffaire);
let MoisMoinNbrClient = ventes.find(m => m.nb_clients === moinNbrClient);
console.log('le meilleur mois de chiffre d affaire est :',meilleurMois.mois);
console.log('le mois de moin nombre de clients :',MoisMoinNbrClient.mois);

let ventess = ventes.filter(vente => vente.chiffre_affaires > 5000);
console.log('table ventesse pour les ventes de chiffre_affaires plus de 5000', ventess);

ventes.sort((a, b) => a.chiffre_affaires - b.chiffre_affaires);
console.log('tri decroissante : ', ventes);



