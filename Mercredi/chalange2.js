
let ingredients = [
    {
        nom: 'tomate',
        quantite: 30,
        unite: 'kg',
        prix_unitaire: 10,
        seuil_alert: 5,
        categories: 'legum'

    },
     {
        nom: 'ingre2',
        quantite: 84,
        unite: 'litres',
        prix_unitaire: 5,
        seuil_alert: 3,
        categories: 'boisson'

    },
     {
        nom: 'poulet',
        quantite: 66,
        unite: 'kg',
        prix_unitaire: 100,
        seuil_alert: 5,
        categories: 'viande'

    },
     {
        nom: 'ingre4',
        quantite: 35,
        unite: 'kg',
        prix_unitaire: 200,
        seuil_alert: 8,
        categories: 'viande'

    },
     {
        nom: 'ingre5',
        quantite: 47,
        unite: 'littres',
        prix_unitaire: 9,
        seuil_alert: 5,
        categories: 'boisson'

    },
     {
        nom: 'sel',
        quantite: 20,
        unite: 'pieces',
        prix_unitaire: 3,
        seuil_alert: 5,
        categories: 'epice'
    },
    {
        nom: 'ingre7',
        quantite: 29,
        unite: 'pieces',
        prix_unitaire: 5,
        seuil_alert: 5,
        categories: 'epice'
    },
    {
        nom: 'ingre8',
        quantite: 50,
        unite: 'pieces',
        prix_unitaire: 8,
        seuil_alert: 14,
        categories: 'epice'

    },
    {
        nom: 'ingre9',
        quantite: 6,
        unite: 'kg',
        prix_unitaire: 100,
        seuil_alert: 10,
        categories: 'viande'
    },
    {
        nom: 'ingre10',
        quantite: 10,
        unite: 'letres',
        prix_unitaire: 10,
        seuil_alert: 16,
        categories: 'boisson'
    },
] 

let Ingre_alert = ingredients.filter(i => i.quantite < i.seuil_alert);
console.log('les ingrédients dont la quantité est en dessous du seuil d alert : ', Ingre_alert);


let Totalestokes= 0;
let stockBoisson = 0;
let stockVainde = 0;
let stockLegum = 0;
let stockEpice = 0

const commande = [
  { nom: "tomate", quantite: 20},
  { nom: "poulet", quantite: 100 },
  { nom: "sel", quantite: 2 }
];

let manque = [];

for(i = 0; i <ingredients.length;i++){

    for(j=0; j < commande.length; j++){
            if(ingredients[i].nom == commande[j].nom){
                if( ingredients[i].quantite >= commande[j].quantite){
                    ingredients[i].quantite -= commande[j].quantite;
                }else{
                    manque.push(commande[j].nom);
                }
            }  
    }
}



for(i=0; i <ingredients.length;i++){

     Totalestokes += (ingredients[i].quantite * ingredients[i].prix_unitaire);

     switch(ingredients[i].categories){
        case 'legum':
            stockLegum += ingredients[i].quantite*ingredients[i].prix_unitaire;
        case 'boisson':
            stockBoisson += ingredients[i].quantite*ingredients[i].prix_unitaire;
        case 'epice':
            stockEpice += ingredients[i].quantite* ingredients[i].prix_unitaire;
        case 'viande':
            stockVainde += ingredients[i].quantite*ingredients[i].prix_unitaire;
        default:
            console.log('acune stock existe pour le moment');
     }
    

}
console.log('valeur total du stock est : ', Totalestokes);
console.log('valeur total du stock Vainde : ', stockVainde);
console.log('valeur total du stock des boisson : ', stockBoisson);
console.log('valeur total du stock du Epices : ', stockEpice);
console.log('valeur total du stock de legumes : ', stockLegum);

console.log('les ingrediantes manque  ',manque);

console.log(ingredients);

let listcours = [];

ingredients.forEach(i => {

    if(i.quantite <= i.seuil_alert){
        let quantiteCommande = i.seuil_alert * 2 - i.quantite;

        listcours.push({
            nom: i.nom,
            quantiteCommande : quantiteCommande,
        });
    }
})

console.log('qauntite a commandee : ', listcours);