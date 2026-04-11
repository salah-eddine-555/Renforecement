<?php


class Cinema {
    private array $salles;



    public function __construct($salles){
        $this->salles = $salles;
    }

    public function ajouterSalle($nom, $nbrPlaces){

        array_push($this->salles, [
            'nom'=> $nom,
            'nbrPlaces' => $nbrPlaces,
            'reservation'=> [] // table vides acune reseration au debut
        ]);

        return true;
    }


    public function reserver($nomSalle, $nomClient, $nbPlaces){

        for($i = 0; $i < count($this->salles); $i++){

            if($this->salles[$i]['nom'] === $nomSalle){
                if($this->salles[$i]['nbrPlaces'] < $nbrPlaces){
                    echo "le nombres des places est n'est pas disponible pour cette salle";
                    return;
                }
                $this->salles[$i]['reservation'] [] = ['nom' => $nomClient];
                return true;
            }   
            echo "cette salle est introuvables";
        }
    }

    public function annulerReservation($nomSalle, $nomClient){

        for($i = 0;  $i < count($this->salles); $i++){
            if($this->salles[$i]['nom'] === $nomSalle){

                for($j=0; $j < count($this->salles[$i]['reservations']); $j++){
                    if($this->salles[$i]['reservations'][$j]['nom'] === $nomClient){
                        unset($this->salles[$i]['reservations'][$j]);
                        echo "reservation est anuuler";
                        return true;
                    }
                }
            }
            echo "cette salle n'exist pas dans le tableaux des salles";
            return false;
        }
    }


    public function afficherOccupation(){

        for($i = 0; $i < count($this->salles); $i++){

            $total  += $this->salles[$i]['nbrSalles'];

            $prise = 0;

            for($j = 0; $j < count($this->salles[i]['reservations']); $j++){
                
                $prise += $this->salles[$i]['reservations'][$j]['nbrPlace'];
            }
            $placeRestants  = $total - $prise;

            $pourcentagePalces = ($pris / $total) * 100;

            echo "Salle: " . $this->salles[$i]['nom'] . "<br>";
            echo "Total: $total<br>";
            echo "Prises: $prises<br>";
            echo "Restantes: $restantes<br>";
            echo "Occupation: " . $pourcentage . "%<br>";

        }
    }

    public function getRevenusEstimes($prixBillet){

        $total  = 0;

        for($i = 0; $i < count($this->salles); $i++){
            $total += $this->salles[i]['nbPlaces'];
        }
        return $total * $prixBillet;
    }
}