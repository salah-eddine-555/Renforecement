console.log('chalanged e jeudi  ========>');

let reservations = [
    {
        id: 1,
        nom_client: "Ahmed",
        nombre_personnes: 4,
        date: "2025-01-19",
        heure: "2:00",
        statut: "confirmée", 
        telephone: "0612345678",
    }
]
let count = 1;
function reserver(nom_client, nbrPersonnes, date,heure, telephone){
        let totalPersonnes = 0; 
        for(let i =0; i < reservations.length; i++){
            if(reservations[i].date === date && reservations[i].heure === heure){
                totalPersonnes +=reservations[i].nombre_personnes;
            }
        }
        if(totalPersonnes + nbrPersonnes > 30){
            let NewReservation = {
                'id': ++count,
                'nom_client': nom_client,
                'nombre_personnes': nbrPersonnes,
                'date': date,
                'heure': heure,
                'statut': 'en attent',
                'telephone': telephone
            }

            reservations.push(NewReservation);
        }else{
                let NewReservation = {
                        'id': ++count,
                       'nom_client': nom_client,
                       'nombre_personnes': nbrPersonnes,
                       'date': date,
                       'heure': heure,
                       'statut': 'confirme',
                       'telephone': telephone,
                       'tets': 'ahed',
                   }
               
                   reservations.push(NewReservation);
        }
}

function annulerReservation(reservationId){
    
    let reservation = reservations.find(r => r.id === reservationId);
    
    reservation.statut = 'annulee';

    let totalRservationConfirmee = 0;
    for(let i =0; i <reservations.length; i++){

        if(reservations[i].date === reservation.date && reservations[i].heure === reservation.heure && reservations[i].statut === 'confirme'){
            totalRservationConfirmee +=reservations[i].nombre_personnes;
        }
            
    }

    for(let res of reservations){
        if(res.date == reservation.date && res.heure === reservation.heure && res.statut === 'en attent'){
            if(totalRservationConfirmee + res.nombre_personnes <= 30){
                res.statut = 'confirme';
                totalRservationConfirmee += res.nombre_personnes;
            }
        }
    }

}

function trParDate(date){res.sort((a, b) => a.heure - b.heure);

    let res = reservations.filter(res => res.date === date);

    res.sort((a, b) => a.heure - b.heure);
}

function CalculerTauxOccupation(date){

    let res = reservations.filter(res => res.date === date && res.statut === 'confirme');
    let taux = {}
    
    for(let i = 0; i< res.length; i++){
        if(!taux[res[i].heure]){
            taux[res[i].heure] =0;
        }   
        taux[res[i].heure] += res[i].nombre_personnes;
    }

   for (let heure in taux) {
    taux[heure] = ((taux[heure] / 30 ) * 100).toFixed(0);
    }
    

    return taux;
    
}


// annulerReservation(2);



reserver('Salah', 4, '2025-01-19', '2:00', '0624494495'); 
reserver('Omar', 10, '2025-01-19', '2:00', '0624488888'); 
reserver('Fatima', 12, '2025-01-19', '2:00', '0624477777'); 
reserver('Mouna', 5, '2025-01-19', '2:00', '0624466666'); //en att
reserver('Ali', 3, '2025-01-19', '3:00', '0624455555'); 
reserver('mohamed', 15, '2025-01-19', '3:00', '0624444444'); 
reserver('hamid', 20, '2025-01-19', '3:00', '0624433333'); //en att
reserver('Leila', 8, '2025-01-19', '4:00', '0624422222'); 

console.log(reservations);

console.log('test')

annulerReservation(4);
console.log(reservations);
let tauxOccupation = CalculerTauxOccupation("2025-01-19");
console.log('Taux occupation par créneau :', tauxOccupation);


