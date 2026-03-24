
console.log("chalange 3 pour Mardi 1er semaine=============================>");

let Avis = [
    {
        pseudo: 'psedou1',
        note : 4,
        commentaire:  'bien ..',
        date: '2026-03-12',
    },
    {
        pseudo: 'pseudo2',
        note: 3,
        commentaire: 'comment1',
        date: '2026-01-10'
    },
     {
        pseudo: 'pseudo2',
        note: 3,
        commentaire: 'comment1',
        date: '2026-01-10'
    },
     {
        pseudo: 'pseudo3',
        note: 2,
        commentaire: 'comment1',
        date: '2026-01-11'
    },
     {
        pseudo: 'pseudo4',
        note: 3,
        commentaire: 'comment4',
        date: '2026-01-22'
    },
     {
        pseudo: 'pseudo5',
        note: 3,
        commentaire: 'comment5',
        date: '2026-01-10'
    },
     {
        pseudo: 'pseudo6',
        note: 5,
        commentaire: 'comment6adsjhfkjfhasdf',
        date: '2026-01-18'
    },
     {
        pseudo: 'pseudo7',
        note: 5,
        commentaire: 'comment7asdfhjads',
        date: '2026-01-10'
    },
     {
        pseudo: 'pseudo8',
        note: 3,
        commentaire: 'comment8ahdfkjhjayg adfbady adfhagdyf ',
        date: '2026-01-17'
    },
     {
        pseudo: 'pseudo9',
        note: 3,
        commentaire: 'comment9 afhgg hajsdhfgy afhysua fhay',
        date: '2026-01-13'
    },
     {
        pseudo: 'pseudo10',
        note: 3,
        commentaire: 'comment10 asdhfjku fdasyf ',
        date: '2026-01-3'
    },
]

let compteNote = {};
let sommenotes = 0;
let avislong = Avis[0].commentaire.length;

for(i=0; i < Avis.length; i++){
    
    let note = Avis[i].note;
    sommenotes += note;

    if(compteNote[note]){
        compteNote[note]++;
    }else{
        compteNote[note] = 1;
    }

    if(Avis[i].commentaire.length > avislong){
        avislong = Avis[i].commentaire.length;
    }
    
}


let moyenne =  (sommenotes/Avis.length).toFixed(1);

console.log("la moyenne est : ", moyenne);

console.log("les avis pour chaque notes: ", compteNote);

let avisPositive = Avis.filter(a => a.note > 4);
let avisNegative = Avis.filter(a => a.note <= 2);
console.log('les avis positives : ', avisPositive);
console.log('les avis negatives: ', avisNegative);

Avis.sort((a, b)=> {
    return new Date(b.date) - new Date(a.date);
});
console.log("les avis trie : ", Avis);

let LongAvis = Avis.filter(a => a.commentaire.length === avislong)
// console.log('l avis le plus long c est  : ', LongAvis);

console.log(moyenne, 'base sur 10 avis --', avisPositive.length, 'postifis, ', avisNegative.length,' negatifs');
