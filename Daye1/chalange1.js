

//chalange1
let noms = ['salah', 'brahim', 'mohamed','aymane', 'yassire', 'ahmed'];
for(i=0; i <noms.length; i++){
    console.log(noms[i]);
}

console.log('le premier inscrit :  ', noms[0]);

let dernier = noms[noms.length-1];
console.log('le dernier inscrit : ', dernier);

let nbrTotal = 0;
for(i=0; i <noms.length;i++){
    nbrTotal +=1;
}
console.log('le nombre totale des inscrites est : ', nbrTotal);

//ajouter les deux noveau participantes a la fin du tables des noms 
noms.push('moussa', 'anoure');
console.log(noms);

// retire le drenier d'un element du table

console.log(noms.pop());
console.log(noms);