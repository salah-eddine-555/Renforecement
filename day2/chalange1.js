console.log('day2 chalange 1====================>')

let chansons = [
    {
        titre: 'chonsone1',
        artiste: 'art1',
        duree: 700
    },
     {
        titre: 'chonsone2',
        artiste: 'art2',
        duree: 460
    },
     {
        titre: 'chonsone3',
        artiste: 'art3',
        duree: 300
    },
     {
        titre: 'chonsone4',
        artiste: 'art4',
        duree: 500
    },
     {
        titre: 'chonsone5',
        artiste: 'art5',
        duree: 60
    },
     {
        titre: 'chonsone6',
        artiste: 'art6',
        duree: 240
    },
     {
        titre: 'chonsone7',
        artiste: 'art7',
        duree: 600
    },

     {
        titre: 'chonsone8',
        artiste: 'art8',
        duree: 300
    },
     {
        titre: 'chonsone9',
        artiste: 'art9',
        duree: 700
    },
    {
        titre: 'chonsone10',
        artiste: 'art10',
        duree: 460
    },{
        titre: 'Jazz',
        artiste: 'teste1',
        duree: 200
    }
]

let Rocks = [{titre: 'rock1', artiste: 'artRoc1', duree: 480},
     {
        titre: 'rock2',
        artiste : 'artRoc2',
        duree: 400
     }]

let dureeTotal = 0;
let chonsoneLong=0;
for(i=0; i < chansons.length; i++){

    // console.log(chansons[i].titre);
    dureeTotal +=chansons[i].duree;

    let dureeMinute = (chansons[i].duree / 60).toFixed(2);
    let seconde = chansons[i].duree - (dureeMinute / 60);
    // console.log('seconde', seconde);
    chansons[i].duree = dureeMinute;
    console.log(chansons[i].duree);

    if(chonsoneLong < chansons[i].duree){
        chonsoneLong = chansons[i].duree;
    }
    if(chansons[i].duree < 6){
        console.log('moin de 6 minute');
    }else{
          console.log('plus de 6 minutes');
    } 
    if(chansons[i].titre == 'Jazz'){
        console.log('existe au moin un chonson de genre du Jazz');
    }
}
chansons.sort((a, b)=> a.duree - b.duree);
console.log(chansons);



// console.log('duree total en minutes ', dureeTotal/60);
// console.log('duree total en secondes : ', dureeTotal);
// console.log('chansone le plus long est ', chonsoneLong);