
console.log("chalange4=================================>");

let articles = [
    {
        nom: 'lait',
        quantite: 4,
        prix: 23
    },
    {
        nom: 'article2',
        quantite: 20,
        prix: 30
    },
     {
        nom: 'article3',
        quantite: 10,
        prix: 20
    },
     {
        nom: 'article4',
        quantite: 50,
        prix: 60
    },
     {
        nom: 'article5',
        quantite: 24,
        prix: 80
    }
]

let sousTotal = 0;
let TotalTTc;
let tva;
for(i=0; i < articles.length; i++){
    let prix = articles[i].prix;
   sousTotal +=prix * articles[i].quantite;
   tva = sousTotal * 0.2;
   TotalTTc = sousTotal + tva;
   totalligne = articles[i].quantite * articles[i].prix; 
   console.log(articles[i].nom, "*", articles[i].quantite, "=", totalligne);
 
    
} 
   console.log("le sous total des articles: ", sousTotal);
   console.log("le total TTC : ", TotalTTc);