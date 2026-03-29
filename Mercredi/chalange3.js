
console.log("chalange3 -------------->");

let equipes = [
    {
        nom : 'equip1',
        point: 20,
        buts_pour: 30,
        buts_centre: 28,
        matches_jeus: 30
    },
    {
        nom : 'equip2',
        point: 20,
        buts_pour: 40,
        buts_centre: 13,
        matches_jeus: 50
    },
    {
        nom : 'equip3',
        point: 10,
        buts_pour: 14,
        buts_centre: 28,
        matches_jeus: 26
    },
    {
        nom : 'equip4',
        point: 44,
        buts_pour: 29,
        buts_centre: 9,
        matches_jeus: 14
    },
    {
        nom : 'equip5',
        point: 35,
        buts_pour: 20,
        buts_centre: 8,
        matches_jeus: 20
    },
]


for(i=0; i < equipes.length; i++){

    equipes[i].diff = equipes[i].buts_pour - equipes[i].buts_centre;
    console.log(equipes[i].nom, "defrences de buts", equipes[i].diff);
}

equipes.sort((a, b) => {
    if(a.point !== b.point){
        return b.point - a.point;
    }
    return  a.diff - b.diff;
    
});

console.log(equipes);

for(i=0; i < equipes.length; i++){

    console.log("le classement ", equipes[i].nom,"--",equipes[i].point, 'pts', '(',equipes[i].diff,')')
}

let Equipe1 = equipes[0];
let Equipe2 = equipes[1];


let butsEquipe1 = Math.floor(Math.random() * 5);
let butsEquipe2 = Math.floor(Math.random() * 5);

Equipe1.buts_pour +=butsEquipe1;
Equipe1.buts_centre += butsEquipe2;

Equipe2.buts_pour +=butsEquipe2;
Equipe2.buts_centre += butsEquipe1;

Equipe1.matches_jeus +=1;
Equipe2.matches_jeus +=1;

if(butsEquipe1 > butsEquipe2){
    Equipe1.point +=3;
}else if(butsEquipe1 < butsEquipe2){
    Equipe2.point +=3;
}else{
    Equipe1.point +=1;
    Equipe2.point +=1;
}


console.log('Equipe1 : ', butsEquipe1, '-', butsEquipe2,  "Equipe2");
console.log(equipes[0]);