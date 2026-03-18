
console.log('chalange3 ==============================>');

const personne = {
    nom: 'salah',
    prenom: 'zemrani',
    age: 22,
    ville: 'h-44',
    email: 'salah@gmail.com'
}
console.log('ville ancienne : ', personne.ville);
personne.ville = 'ouled-Tiema'
console.log('la ville apres la modification : ', personne.ville);

personne.tele = '0624494495';
console.log("ce ci le numero de tele apres ajoute le : ", personne.tele);

console.log("affichage des cle value de objet personne ")
for(const pers in personne){
    console.log(pers, ":", personne[pers]);
}
