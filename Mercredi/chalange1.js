console.log("chalange1 Mercredi");

let contacts = [
    {
        nom:'contact1',
        entreprise: 'entreprise1',
        email: 'contact1@gmail.com',
        tele: 21234908765,
        ville: 'agadir',
        adresse : {
            rue : 'Rue Elhay Mouhamdi ',
            code_postal:80000,
            ville: 'agadir',
            pays: 'maroc'
        }

    },
    {
        nom:'contact2',
        entreprise: 'entreprise2',
        email: 'contact2@gmail.com',
        tele: 21234908765,
        ville: 'rabata',
        adresse : {
            rue : 'Yaakoub ElMansoure',
            code_postal:10000,
            ville: 'rabat',
            pays: 'maroc'
        }

    },
     {
        nom:'contact3',
        entreprise: 'entreprise3',
        email: 'contact3@gmail.com',
        tele: 2123489965,
        ville: 'marakech',
        adresse : {
            rue : 'Rue rlayla',
            code_postal: 10000,
            ville: 'marakech',
            pays: 'maroc'
        }

    },
    {
        nom:'contact4',
        entreprise: 'entreprise4',
        email: 'contact4@gmail.com',
        tele: 21234897364,
        ville: 'agadir',
        adresse : {
            rue : 'Rue Adrare',
            code_postal:80000,
            ville: 'agadir',
            pays: 'maroc'
        }
    },
    {
        nom:'contact5',
        entreprise: 'entreprise5',
        email: 'contact5@gmail.com',
        tele: 21244265362,
        ville: 'Tiznite',
        adresse : {
            rue : 'Rue Tiznite',
            code_postal:85000,
            ville: 'tiznite',
            pays: 'maroc'
        }
    },
    {
        nom:'contact6',
        entreprise: 'entreprise6',
        email: 'contact6@gmail.com',
        tele: 21234312344,
        ville: 'ouledTiema',
        adresse : {
            rue : 'Rue Elhourria',
            code_postal:83350,
            ville: 'ouledTiema',
            pays: 'maroc'
        }
    },
    
]

contacts.forEach(c => {
    console.log('le nom : ', c.nom, ' de ville: ', c.ville);
    
})
let villes = {}

for(i=0; i < contacts.length; i++){
    let v = contacts[i].ville;

    if(!villes[v]){
        villes[v] = [];
    }
    villes[v].push(contacts[i].nom);
}

console.log(villes);

let intoEntre = contacts.filter(c => c.entreprise == 'entreprise1');
console.log(intoEntre);

contacts[0].adresse.rue = 'Rue teste 1';
contacts[0].adresse.code_postal = 3400;
contacts[0].adresse.ville = 'ville test';
contacts[0].adresse.pays = 'pay teste';

console.log('contact modifiee : ', contacts[0]);

const newContacts = contacts.map(c => ({
    ...c,
     dernierContact: new Date(Date.now() - Math.random()*1000 *60*60*60*24* 60),
}))

console.log(newContacts);


let result = newContacts.filter(c => c.dernierContact > 30 /(24*60*60*1000));

console.log('les contact plus de 30jours est : ', result);




